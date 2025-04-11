
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import base64
# from io import BytesIO
# import os

# from zmlb.backend.hybrid_insight_engine import generate_combined_insights
# from zmlb.backend.trends import plot_health_trends

# app = Flask(__name__)
# CORS(app) 

# @app.route('/upload-csv/', methods=['POST'])
# def upload_csv():
#     try:
#         if 'file' not in request.files:
#             return jsonify({"error": "No file part in the request"}), 400

#         file = request.files['file']

#         if file.filename == '':
#             return jsonify({"error": "No file selected"}), 400

#         # Read CSV into DataFrame
#         df = pd.read_csv(file)
#         print("✅ CSV successfully loaded.")
#         print("📊 Data preview:\n", df.head())

#         # Generate insights
#         insights = generate_combined_insights(df)
#         print("✅ Insights generated.")

#         # Generate trend plot and convert to base64
#         fig = plot_health_trends(df)

#         print("trends completed  : **** " , fig)
#         buf = BytesIO()
#         fig.savefig(buf, format="png")
#         buf.seek(0)
#         img_str = base64.b64encode(buf.read()).decode()

#         return jsonify({
#             "insights": insights,
#             "trend_image": img_str
#         })

#     except Exception as e:
#         print("❌ Error during processing:", str(e))
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     port = int(os.environ.get("PORT", 10000))
#     app.run(host='0.0.0.0', port=port, debug=True)















# # from fastapi import FastAPI, UploadFile, File
# # from fastapi.middleware.cors import CORSMiddleware
# # import pandas as pd
# # from hybrid_insight_engine import generate_combined_insights
# # from trends import plot_health_trends
# # import base64
# # from io import BytesIO

# # app = FastAPI()

# # # 🌐 Allow requests from *any* origin (not recommended for production unless necessary)
# # # app.add_middleware(
# # #     CORSMiddleware,
# # #     allow_origins=["*"],
# # #     allow_credentials=True,
# # #     allow_methods=["*"],
# # #     allow_headers=["*"],
# # # )

# # # ✅ CORS setup so frontend can access backend
# # app.add_middleware(
# #     CORSMiddleware,
# #     allow_origins=[
# #         # "https://cursor-nxh6cv6tb-devulapellykushals-projects.vercel.app/",
# #         # "http://localhost:3000"  # 🟢 Replace this with your actual frontend URL
# #         "*"
# #     ],
# #     allow_methods=["*"],
# #     allow_headers=["*"],
# # )




# # @app.post("/upload-csv/")
# # async def upload_csv(file: UploadFile = File(...)):
# #     try:
# #         # Load CSV
# #         df = pd.read_csv(file.file)
# #         print("✅ CSV successfully loaded.")
# #         print("📊 Data preview:\n", df.head())

# #         # Generate insights
# #         insights = generate_combined_insights(df)
# #         print("✅ Insights generated.")

# #         # Generate plot and convert to base64
# #         fig = plot_health_trends(df)
# #         buf = BytesIO()
# #         fig.savefig(buf, format="png")
# #         img_str = base64.b64encode(buf.getvalue()).decode()

# #         return {
# #             "insights": insights,
# #             "trend_image": img_str
# #         }
# #     except Exception as e:
# #         print("❌ Error during processing:", str(e))
# #         return {"error": str(e)}
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import base64
# from io import BytesIO
# import os

# # ✅ Custom Insight + Trend Generator Imports
# from zmlb.backend.hybrid_insight_engine import generate_combined_insights
# from zmlb.backend.trends import plot_health_trends

# app = Flask(__name__)
# CORS(app,
#      origins=["https://devulapellykushalhig.vercel.app"],
#      methods=["GET", "POST", "OPTIONS"],
#      allow_headers=["Content-Type", "Authorization"],
#      supports_credentials=True)

# @app.route('/upload-csv/', methods=['POST'])
# def upload_csv():
#     try:
#         # 🛡️ Validate file presence
#         if 'file' not in request.files:
#             return jsonify({"error": "No file part in the request"}), 400

#         file = request.files['file']

#         if file.filename == '':
#             return jsonify({"error": "No file selected"}), 400

#         # 🛡️ Optional: Check file extension
#         if not file.filename.endswith('.csv'):
#             return jsonify({"error": "File must be a CSV"}), 400

#         # 📥 Read CSV into DataFrame
#         df = pd.read_csv(file)
#         print("✅ CSV loaded successfully.")
#         print("📊 Preview:\n", df.head())

#         # 🧠 Generate health insights
#         insights = generate_combined_insights(df)
#         print("✅ Insights generated.")

#         # 📈 Generate trend plot
#         fig = plot_health_trends(df)
#         print("✅ Trend plot generated.")

#         # 🖼️ Convert plot to base64
#         buf = BytesIO()
#         fig.savefig(buf, format="png")
#         buf.seek(0)
#         img_str = base64.b64encode(buf.read()).decode()

#         # 📤 Return both insights and image
#         return jsonify({
#             "insights": insights,
#             "trend_image": img_str
#         })

#     except Exception as e:
#         print(f"❌ Error: {str(e)}")
#         return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # 🚀 Start the Flask app
# if __name__ == '__main__':
#     port = int(os.environ.get("PORT", 10000))
#     app.run(host='0.0.0.0', port=port, debug=True)
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import os
# from .hybrid_insight_engine import generate_combined_insights

# app = Flask(__name__)

# # ✅ CORRECT: Allow only Vercel origin
# CORS(app, origins="*")

# @app.route('/')
# def home():
#     return '✅ Flask API is live'

# # ✅ ADD THIS: Handles preflight from browser
# @app.route('/upload-csv/', methods=['OPTIONS'])
# def preflight():
#     return '', 204

# @app.route('/upload-csv/', methods=['POST'])
# def upload_csv():
#     if 'file' not in request.files:
#         return jsonify({"error": "No file part"}), 400
#     file = request.files['file']
#     return jsonify({"message": f"Received {file.filename}"})

# if __name__ == '__main__':
#     port = int(os.environ.get("PORT", 10000))
#     app.run(host='0.0.0.0', port=port)


from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import base64
from io import BytesIO
import matplotlib.pyplot as plt
import os

# 🧠 Your core logic
from .hybrid_insight_engine import generate_combined_insights
from .trends import plot_health_trends

app = Flask(__name__)
# CORS(app, origins="*")
CORS(app, origins=["https://devulapellykushalhig.vercel.app"], supports_credentials=True)

# CORS(app, origins=["https://devulapellykushalhig.vercel.app"], supports_credentials=True)

@app.route('/')
def home():
    return '✅ Flask API is live'

@app.route('/upload-csv/', methods=['POST', 'OPTIONS'])
def upload_csv():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        if not file.filename.endswith('.csv'):
            return jsonify({"error": "Only CSV files allowed"}), 400

        # 🧾 Read and process CSV
        df = pd.read_csv(file)
        insights = generate_combined_insights(df)

        # 📈 Generate and encode trend image
        fig = plot_health_trends(df)
        buf = BytesIO()
        fig.savefig(buf, format='png')
        buf.seek(0)
        img_str = base64.b64encode(buf.read()).decode()

        print("✅ Returning image, size:", len(img_str))

        return jsonify({
            "insights": insights,
            "trend_image": img_str
        })

    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"error": "Internal server error", "details": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)
