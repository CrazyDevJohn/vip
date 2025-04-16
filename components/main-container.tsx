"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";
import Image from "next/image";
import React, { useState } from "react";
import OtherSection from "./OtherSection";

const MainContainer = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [keywords, setKeywords] = useState<string[] | []>([]);
  const [guestions, setQuestions] = useState<string[] | []>([]);

  const handleImageUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.files && ev.target.files[0]) {
      setImage(ev.target.files[0]);
    }
  };

  const identifyImage = async (additionalPrompt: string = "") => {
    if (!image) return;

    setLoading(true);

    const genAi = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );

    const model = genAi.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    try {
      const imageParts = await fileToGenarativeParts(image);

      const result = await model.generateContent([
        `Identify this image and provide its name and important information including a brief explanation about that image. ${additionalPrompt}`,
        imageParts,
      ]);

      const response = await result.response;

      const text = response
        .text()
        .trim()
        .replace(/```/g, "")
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/-\s*/g, "")
        .replace(/\n\s*\n/g, "\n");

      setResult(text);
      generateKeywords(text);
      await generateRelatedQuestions(text);
    } catch (err) {
      console.log((err as Error)?.message);
    } finally {
      setLoading(false);
    }
  };

  const generateKeywords = (text: string) => {
    const words = text.split(/\s+/);
    const keywordSet = new Set<string>();
    words.forEach((word) => {
      if (
        word.length > 4 &&
        ![
          "this",
          "that",
          "that's",
          "with",
          "portraying",
          "from",
          "have",
        ].includes(word.toLowerCase())
      ) {
        keywordSet.add(word);
      }
    });

    setKeywords(Array.from(keywordSet).slice(0, 5));
  };

  const generateRelatedQuestions = async (text: string) => {
    const genAi = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY!
    );

    const model = genAi.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    try {
      const result = await model.generateContent([
        `Based on the following information about an image, generate 5 related questions that someone might ask to learn more about the subject:

        ${text}

        Format the output as a simple list of questions, one per line.`,
      ]);

      const response = await result.response;
      const question = response.text().trim().split("\n");
      setQuestions(question);
    } catch (err) {
      console.log((err as Error)?.message);
      setQuestions([]);
    }
  };

  const fileToGenarativeParts = async (
    file: File
  ): Promise<{ inlineData: { data: string; mimeType: string } }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result as string;
        const base64Content = base64data.split(",")[1];

        resolve({
          inlineData: {
            data: base64Content,
            mimeType: file.type,
          },
        });
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };

  const askRelatedQuestion = async (question: string) => {
    identifyImage(
      `Answer the following question about the image: "${question}".`
    );
  };

  const reGenarateContentByKeyWord = (keyword: string) => {
    identifyImage(`Focus more on aspects related to "${keyword}".`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6  bg-white lg:px-8 py-12">
      <div className=" rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 bg-gray-900 rounded-2xl flex justify-center items-center flex-col">
          <h2 className="text-3xl font-extrabold text-blue-100 text-center">
            View In Pictures
          </h2>

          <div className="mb-8">
            <label
              htmlFor="image-upload"
              className="flex relative text-sm min-w-[200px] min-h-[80px] justify-center items-center  py-4 px-4 mt-8 border-dashed border border-[#e3e3e355] rounded-xl"
            >
              <span className="absolute font-bold text-white text-lg text-shadow-2xs bottom-6">
                Upload an Image
              </span>
              {image && (
                <div className=" flex justify-center ">
                  <Image
                    src={URL.createObjectURL(image)}
                    alt="Uploaded Image"
                    width={300}
                    height={300}
                    className="shadow-xl rounded-lg"
                  />
                </div>
              )}
            </label>

            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              // className="block w-full text-sm appearance-none text-blue-100 file:py2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition duration-150 ease-in-out "
              className="hidden"
            />
          </div>

          <button
            type="button"
            onClick={() => identifyImage()}
            disabled={!image || loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg"
          >
            {loading ? "Identifing" : "Identify Image"}
          </button>
        </div>

        {/* result desplay section*/}
        {result && (
          <div className="bg-blue-50 p-8 border-t border-blue-100 ">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Image Information
            </h3>

            <div className="max-w-none">
              {result.split("\n").map((line, index) => {
                if (
                  line.startsWith("Important Infomation") ||
                  line.startsWith("Other Infomation")
                ) {
                  return (
                    <h4
                      key={index}
                      className="text-xl font-semibold mt-4 mb-2 text-blue-700"
                    >
                      {line}
                    </h4>
                  );
                } else if (line.match(/^\d+\./) || line.startsWith("-")) {
                  return (
                    <li key={index} className="ml-4 mb-2 text-gray-700">
                      {line}
                    </li>
                  );
                } else if (line.trim() !== "") {
                  return (
                    <p key={index} className="mb-2 text-gray-800">
                      {line}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-bold text-blue-800 mb-2">
                Related Keywords
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => reGenarateContentByKeyWord(keyword)}
                    key={index}
                    className=" bg-blue-100  text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-150 ease-in-out"
                  >
                    {keyword}
                  </button>
                );
              })}
            </div>

            {guestions.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-bold text-blue-800 mb-2">
                  Related Questions
                </h4>

                <div className="space-y-2">
                  {guestions.map((guestion, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => askRelatedQuestion(guestion)}
                        className="text-left w-full bg-blue-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition duration-200 ease-in-out cursor-pointer"
                      >
                        {guestion}
                      </li>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Other Section */}
      <OtherSection />
    </main>
  );
};

export default MainContainer;
