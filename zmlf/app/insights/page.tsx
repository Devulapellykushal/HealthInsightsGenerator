// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import BackgroundPaths from '../components/BackgroundPaths';

// const emojis = [
//   '🧠', '💬', '📊', '😴', '💧', '😊', '📈', '🧪',
//   '👨‍⚕️', '🤖', '📦', '🛠️', '💻', '🧬', '📅',
//   '🧘‍♂️', '📚', '🧾', '⚙️', '🩺', '🧍‍♂️', '🚰', '🌙'
// ];

// export default function InsightsPage() {
//   const [isClient, setIsClient] = useState(false);
//   const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
//   const [shuffledEmojis, setShuffledEmojis] = useState(emojis);
//   const [insight, setInsight] = useState('');
//   const [trendImage, setTrendImage] = useState('');
//   const [chatOpen, setChatOpen] = useState(false);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false); // NEW

//   useEffect(() => {
//     setIsClient(true);
//     setShuffledEmojis([...emojis].sort(() => Math.random() - 0.5));
//   }, []);

//   useEffect(() => {
//     if (!isClient) return;
//     const interval = setInterval(() => {
//       setCurrentEmojiIndex((prev) => (prev + 1) % shuffledEmojis.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [isClient, shuffledEmojis.length]);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedFile(e.target.files?.[0] || null);
//   };

//   const handleSubmitUpload = async () => {
//     if (!selectedFile) return;

//     const form = new FormData();
//     form.append('file', selectedFile);
//     setLoading(true);
//     setInsight('');
//     setTrendImage('');

//     try {
//       const res = await fetch('https://healthinsightsgenerator.onrender.com/upload-csv/', {
//         method: 'POST',
//         body: form
//       });

//       if (!res.ok) {
//         const text = await res.text();
//         console.error('Upload failed:', text);
//         throw new Error(text);
//       }

//       const data = await res.json();
//       console.log('Received response:', data);

//       setInsight(JSON.stringify(data.insights, null, 2));
//       setTrendImage(`data:image/png;base64,${data.trend_image}`);
//     } catch (err) {
//       console.error('❌ Error uploading file:', err);
//       setInsight("❌ Failed to generate insights.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
//       <BackgroundPaths />

//       <div className="relative container mx-auto px-4 py-6 sm:py-12 max-w-2xl">
//         <motion.div
//           className="flex flex-col items-center space-y-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-md p-6 w-full">
//             <motion.div
//               className="text-center space-y-3"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//             >
//               <div className="text-4xl sm:text-5xl">{shuffledEmojis[currentEmojiIndex]}</div>
//               <h1 className="text-2xl sm:text-3xl font-bold">Health Insight & Chatbot AI Intern Project</h1>
//               <p className="text-gray-600 text-sm">
//                 Sparkle by ZML — AI-powered personalized health assistant using logs and chatbot interface
//               </p>
//             </motion.div>

//             <div className="w-full mt-6">
//               <h2 className="text-lg font-semibold mb-2">🧠 Insight Engine</h2>
//               <p className="text-sm text-gray-700">
//                 Sparkle parses user logs (sleep, hydration, mood)
//                 in CSV format and generates human-friendly health advice.
//                 <br /><br />
//                 Input: Simulated health data<br />
//                 Output: Smart suggestions like "Increase your hydration", "Your sleep dropped this week"
//                 <br /><br />
//                 💬 Health Chatbot — Ask questions like “How’s my mood this week?” or “What’s my sleep trend?”
//                 <br /><br />
//                 📊 Visual Dashboard — Trend charts for sleep/hydration/mood.
//                 <br /><br />
//                 📂 Upload a CSV (date, sleep_hours, mood, steps, hydration_ml) 
//               </p>
//             </div>

//             <div className="w-full mt-6 flex flex-col sm:flex-row gap-3 items-center">
//               <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="flex-1 px-2 py-1 border rounded w-full sm:w-auto"
//               />
//               <button
//                 onClick={handleSubmitUpload}
//                 className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
//               >
//                 Submit
//               </button>
//             </div>

//             {loading && (
//               <div className="flex flex-col items-center justify-center gap-2 mt-4">
//                 <div className="animate-pulse text-3xl">🔄</div>
//                 <p className="text-sm text-gray-600">Generating trends and insights... please wait.</p>
//               </div>
//             )}

//             {insight && (
//               <div className="w-full mt-4 bg-gray-100 p-4 rounded shadow max-h-72 overflow-auto">
//                 <h3 className="font-bold mb-2">🧠 Insights</h3>
//                 <pre className="text-sm whitespace-pre-wrap">{insight}</pre>
//               </div>
//             )}

//             {trendImage && (
//               <div className="w-full mt-6">
//                 <h3 className="font-bold mb-2">📊 Trends</h3>
//                 <img src={trendImage} alt="Trend Chart" className="rounded shadow w-full h-auto" />
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </div>

//       <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
//         <button
//           onClick={() => setChatOpen(!chatOpen)}
//           className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-200"
//         >
//           {chatOpen ? 'Close Chat' : '💬 Open Chatbot'}
//         </button>

//         {chatOpen && (
//           <div className="mt-2 w-[90vw] sm:w-[360px] h-[70vh] sm:h-[480px] bg-white rounded-xl overflow-hidden shadow-xl border">
//             <iframe
//               src="https://healthinsightsgenerator.onrender.com"
//               title="Sparkle Chatbot"
//               className="w-full h-full"
//               allow="clipboard-write"
//               style={{ border: 'none' }}
//             />
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackgroundPaths from '../components/BackgroundPaths';

const emojis = [
  '🧠', '💬', '📊', '😴', '💧', '😊', '📈', '🧪',
  '👨‍⚕️', '🤖', '📦', '🛠️', '💻', '🧬', '📅',
  '🧘‍♂️', '📚', '🧾', '⚙️', '🩺', '🧍‍♂️', '🚰', '🌙'
];

export default function InsightsPage() {
  // State declarations
  const [isClient, setIsClient] = useState(false);
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const [shuffledEmojis, setShuffledEmojis] = useState(emojis);
  const [insight, setInsight] = useState('');
  const [trendImage, setTrendImage] = useState('');
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: string, message: string }[]>([]);

  // Set up emojis rotation on client-side
  useEffect(() => {
    setIsClient(true);
    setShuffledEmojis([...emojis].sort(() => Math.random() - 0.5));
  }, []);

  // Set up interval to change emoji every 2 seconds
  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prev) => (prev + 1) % shuffledEmojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isClient, shuffledEmojis.length]);

  // File upload handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(e.target.files?.[0] || null);
  };

  // Handle file submission and send it to the API
  const handleSubmitUpload = async () => {
    if (!selectedFile) return;

    const form = new FormData();
    form.append('file', selectedFile);
    setLoading(true);
    setInsight('');
    setTrendImage('');

    try {
      const res = await fetch('https://healthinsightsgenerator.onrender.com/upload-csv/', {
        method: 'POST',
        body: form
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Upload failed:', text);
        throw new Error(text);
      }

      const data = await res.json();
      console.log('Received response:', data);

      setInsight(JSON.stringify(data.insights, null, 2));
      setTrendImage(`data:image/png;base64,${data.trend_image}`);
    } catch (err) {
      console.error('❌ Error uploading file:', err);
      setInsight("❌ Failed to generate insights.");
    } finally {
      setLoading(false);
    }
  };

  // Send user message to backend and receive response
  const handleSendMessage = async () => {
    if (!userMessage.trim()) return; // Don't submit if message is empty

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "You", message: userMessage },
    ]);
    setUserMessage(""); // Clear the input field

    try {
      const response = await fetch("https://your-backend-api.com/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_message: userMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: "Bot", message: data.response },
        ]);
      } else {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: "Bot", message: "Error: Unable to get response." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "Bot", message: "Error: Unable to connect to the chatbot." },
      ]);
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-black overflow-x-hidden">
      <BackgroundPaths />

      <div className="relative container mx-auto px-4 py-6 sm:py-12 max-w-2xl">
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white/70 backdrop-blur-md rounded-lg shadow-md p-6 w-full">
            <motion.div
              className="text-center space-y-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <div className="text-4xl sm:text-5xl">{shuffledEmojis[currentEmojiIndex]}</div>
              <h1 className="text-2xl sm:text-3xl font-bold">Health Insight & Chatbot AI Intern Project</h1>
              <p className="text-gray-600 text-sm">
                Sparkle by ZML — AI-powered personalized health assistant using logs and chatbot interface
              </p>
            </motion.div>

            <div className="w-full mt-6">
              <h2 className="text-lg font-semibold mb-2">🧠 Insight Engine</h2>
              <p className="text-sm text-gray-700">
                Sparkle parses user logs (sleep, hydration, mood)
                in CSV format and generates human-friendly health advice.
                <br /><br />
                Input: Simulated health data<br />
                Output: Smart suggestions like "Increase your hydration", "Your sleep dropped this week"
                <br /><br />
                💬 Health Chatbot — Ask questions like “How’s my mood this week?” or “What’s my sleep trend?”
                <br /><br />
                📊 Visual Dashboard — Trend charts for sleep/hydration/mood.
                <br /><br />
                📂 Upload a CSV (date, sleep_hours, mood, steps, hydration_ml) 
              </p>
            </div>

            <div className="w-full mt-6 flex flex-col sm:flex-row gap-3 items-center">
              <input
                type="file"
                onChange={handleFileChange}
                className="flex-1 px-2 py-1 border rounded w-full sm:w-auto"
              />
              <button
                onClick={handleSubmitUpload}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center gap-2 mt-4">
                <div className="animate-pulse text-3xl">🔄</div>
                <p className="text-sm text-gray-600">Generating trends and insights... please wait.</p>
              </div>
            )}

            {insight && (
              <div className="w-full mt-4 bg-gray-100 p-4 rounded shadow max-h-72 overflow-auto">
                <h3 className="font-bold mb-2">🧠 Insights</h3>
                <pre className="text-sm whitespace-pre-wrap">{insight}</pre>
              </div>
            )}

            {trendImage && (
              <div className="w-full mt-6">
                <h3 className="font-bold mb-2">📊 Trends</h3>
                <img src={trendImage} alt="Trend Chart" className="rounded shadow w-full h-auto" />
              </div>
            )}

{/*             {/* Chat history display */}
            <div className="chat-area">
              {chatHistory.map((msg, index) => (
                <div key={index} className={msg.sender === "You" ? "user-message" : "bot-message"}>
                  <strong>{msg.sender}:</strong> {msg.message}
                </div>
              ))}
            </div>

            {/* Chat input */}
            <div className="input-area">
              <input
                type="text"
                placeholder="Type your message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="chat-input"
              />
              <button onClick={handleSendMessage} className="send-button">
                Send
              </button>
            </div>
          </div>
        </motion.div>
      </div>
 */}
      {/* Chatbot toggle button */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg transition duration-200"
        >
          {chatOpen ? 'Close Chat' : '💬 Open Chatbot'}
        </button>

        {chatOpen && (
          <div className="mt-2 w-[90vw] sm:w-[360px] h-[70vh] sm:h-[480px] bg-white rounded-xl overflow-hidden shadow-xl border">
            <iframe
              src="https://healthinsightsgenerator.onrender.com"
              title="Sparkle Chatbot"
              className="w-full h-full"
              allow="clipboard-write"
              style={{ border: 'none' }}
            />
          </div>
        )}
      </div>
    </main>
  );
}

