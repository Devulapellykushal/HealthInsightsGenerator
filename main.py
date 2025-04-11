import multiprocessing
import subprocess
import time

def run_backend():
    subprocess.run([
        "uvicorn",
        "zmlb.backend.api:app",
        "--host", "0.0.0.0",
        "--port", "8000"
    ])

def run_chatbot():
    subprocess.run([
        "streamlit",
        "run",
        "zmlb/sparkle-health-chatbot/streamlit_chatbot.py"
    ])

# def run_frontend():
#     subprocess.run([
#         "npm", "run","dev"
#     ], cwd="zmlf/app")  

if __name__ == "__main__":
    backend_process = multiprocessing.Process(target=run_backend)
    chatbot_process = multiprocessing.Process(target=run_chatbot)
    # frontend_process = multiprocessing.Process(target=run_frontend)

    backend_process.start()
    time.sleep(2)
    chatbot_process.start()
    time.sleep(2)
    # frontend_process.start()

    backend_process.join()
    chatbot_process.join()
    # frontend_process.join()
