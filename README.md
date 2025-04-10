🌟 Sparkle: AI Health Insight Engine & Chatbot Prototype

Take-Home Assignment – AI Intern
Company: Zoom My Life
Role: AI Intern – Health Insight & Chatbot Prototype
Duration: 1–2 Weeks
Name: Kushal

---

🧠 Project Overview

Sparkle is a lightweight AI-powered prototype designed to provide personalized health guidance through a combination of an insight engine and a chatbot interface. This hands-on project simulates a real product feature actively developed by Zoom My Life, where AI meets empathy to help families manage their well-being.

---

🚀 Features

✅ Insight Engine (Hybrid AI Logic)
- Rule-based & logic-driven health analysis
- Generates contextual recommendations based on CSV health logs
- Supports hydration, sleep, mood, and steps data

💬 Health Chatbot (Streamlit UI)
- Natural Q&A style interaction
- Responds to user queries like:
  - “How am I doing this week?”
  - “What’s my sleep trend?”
- Context-aware, stateless chatbot using session-based insights

📊 Visual Dashboard
- Trend visualizations using Matplotlib
- Tracks fluctuations and patterns in health indicators

---

🗂️ Project Structure

zml/
├──zmlb
|    ├── backend/                          # Backend logic for insights and data processing
│    |   ├── __pycache__/                  # Python cache files
│    |   ├── data/                         # CSV files
│    |   ├── api.py                        #flask
│    |   ├── hybrid_insight_engine.py     # corelogic
│    |   ├── trends.py                    # trendsmatplot
│    |   ├── requirements.txt             # Python dependencies
│    |   └── render.yaml                  # Render deployment config
│    |
|    ├── sparkle-health-chatbot/
│       ├── __pycache__/
│       ├── data/                         # Input data or session files
│       ├── streamlit_chatbot.py         # streamlit chatbot ui
│       ├── hybrid_insight_engine.py
│       └── requirements.txt             # streamlitdependencies
│
├── zmlf/                             # React Frontend ts
│   ├── app/
│   │   ├── components/              # reusablecomponents
│   │   ├── config/
│   │   ├── insights/                # Insight display page
│   │   ├── layout.tsx              # layout wrapper
│   │   └── page.tsx                # main frontend page
│   ├── .vercel/
│   ├── tailwind.config.js          # tailwind css config
│   ├── tsconfig.json               # ts configuration
│   └── package.json
|
└── README.md                        #project overview




🛠️ Tech Stack

| Layer       | Tools / Frameworks                          |
|-------------|---------------------------------------------|
| Language    | Python,  TypeScript             |
| AI Logic    | Rule-based and Ml,Pandas, Matplotlib        |
| Chatbot UI  | Streamlit                                   |
| Frontend    | React (TypeScript + Tailwind)               |
| Deployment  | Render.com                                  |



📥 Getting Started

-Backend

cd zml/zmlb/backend
pip install -r requirements.txt
python hybrid_insight_engine.py


-Streamlit Chatbot run

cd zml/zmlb/sparkle-health-chatbot
pip install -r requirements.txt
streamlit run streamlit_chatbot.py


---

🧪 Sample Queries

- “How am I doing this week?”
- “What’s my sleep trend?”
- “Am I drinking enough water?”
- “Any signs of stress?”

---

🌈 Sample Output

> “⚠️ Your hydration has dropped over the past 3 days. Consider increasing your water intake.”  
> “😔 Mood levels are down, and sleep hours are irregular. Signs point to mild fatigue or stress.”

---

🎯 Future Scope

- 🔗 Integration with Flutter + Firebase backend
- 🤖 GPT-style conversational flow (OpenAI or LangChain)
- 📈 Enhanced visualizations (Plotly / Dash)
- 🧠 Memory & personalization based on user history

---

📹 Demo Video
Link:



<!-- 🧩 License

This prototype is submitted as part of a take-home assignment and is intended for educational and demonstration purposes. -->
