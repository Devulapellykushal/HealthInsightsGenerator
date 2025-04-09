# CopX LinkTree with AI Chat

A modern LinkTree-style website for CopX featuring a built-in AI chatbot powered by OpenAI's GPT-3.5.

## Features

- 🎨 Modern, responsive design
- 🔗 Social media and contact links
- 🤖 AI chatbot integration
- 🌈 Beautiful gradient animations
- 📱 Mobile-friendly interface

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Update the links in `app/page.tsx` to point to your social media profiles
- Modify the color scheme in `tailwind.config.js`
- Customize the AI chat prompt in `app/api/chat/route.ts`

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- OpenAI GPT-3.5
- Vercel AI SDK

## License

MIT 