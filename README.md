This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or# View In Picture

## Project Overview

This View In Picture is a web application built with Next.js that uses Google's Gemini AI to analyze and provide detailed information about uploaded images. The app offers a user-friendly interface for image upload, displays AI-generated information about the image, and provides related keywords and questions for further exploration.

## Features

- Image upload and preview
- AI-powered image analysis using Google Gemini API
- Detailed information display about the identified image
- Related keywords generation for further exploration
- AI-generated related questions about the image
- Responsive design for various screen sizes

## Tech Stack

- Next.js 14 (React framework)
- TypeScript
- Tailwind CSS for styling
- Google Generative AI (Gemini API)

## Key Functionalities

1. **Image Upload**: Users can upload an image through the `ImageUploader` component.
2. **Image Analysis**: The uploaded image is sent to the Gemini AI API for analysis.
3. **Information Display**: The AI-generated information about the image is displayed in the `ResultDisplay` component.
4. **Related Keywords**: The app extracts and displays related keywords from the AI response.
5. **Related Questions**: The app generates and displays related questions about the image using a separate AI query.
6. **Regenerate Content**: Users can click on keywords to regenerate content with a focus on that specific aspect.
7. **Ask Related Questions**: Users can click on generated questions to get more specific information about the image.

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Google Gemini API key: `NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your_api_key_here`
4. Run the development server: `npm run dev`
5. Open `http://localhost:3000` in your browser

## Deployment

This project can be easily deployed on platforms like Vercel or Netlify. Make sure to set up the environment variables in your deployment platform's settings.

## Future Improvements

- Implement user authentication for personalized experiences
- Add image categorization and tagging features
- Implement a gallery of previously analyzed images
- Optimize performance for faster image processing
- Add multi-language support for global users

## Contributors

- [Crazy Dev John](https://youtube.com/@crazydevjohn)

## License

This project is licensed under the MIT License.

## Landing Page

![Image of the project](./snap/snap-1.png)

## After image analysis

![Image of the project](./snap/snap-2.png)

yarn dev
# or
pnpm dev
# or
bun dev
```

![Image of the project](./snap/snap-1.png)


![Image of the project](./snap/snap-2.png)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# vip
