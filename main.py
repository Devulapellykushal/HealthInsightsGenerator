import multiprocessing
import subprocess
import time

def run_backend():
    subprocess.run([
        "python3",
        "zmlb/backend/api.py"  # ✅ Correct path to your Flask file
    ])

def run_chatbot():
    subprocess.run([
        "streamlit",
        "run",
        "zmlb/sparkle-health-chatbot/streamlit_chatbot.py"
    ])

if __name__ == "__main__":
    backend_process = multiprocessing.Process(target=run_backend)
    chatbot_process = multiprocessing.Process(target=run_chatbot)

    backend_process.start()
    time.sleep(2)
    chatbot_process.start()

    backend_process.join()
    chatbot_process.join()

