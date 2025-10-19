# Production-Grade RAG FAQ Chatbot

An AI-powered FAQ chatbot that answers user queries about our college using a production-ready, cloud-native Retrieval-Augmented Generation (RAG) architecture. It retrieves relevant information from a cloud-hosted vector database and generates accurate, context-aware, streaming responses.

This project has moved from a local prototype to a fully deployed application hosted on Hugging Face Spaces.

---
## 🚀 Live Demo

You can interact with the live chatbot here: **[collagebot1184.netlify.app](https://collagebot1184.netlify.app/)**

---
## 🚀 Features
* Answers questions with high accuracy using data from private college documents.
* **Streaming Responses**: Delivers answers word-by-word for an interactive user experience.
* **Cloud-Native**: Built on a modern stack using a serverless vector database and a managed LLM provider.
* **Scalable Architecture**: Deployed via Docker on Hugging Face Spaces, ready to handle user traffic.
* **Easily Updatable**: The knowledge base in Zilliz Cloud can be updated with new documents at any time.

---
## 🏛️ Architecture & How It Works


1.  **Frontend (React)**: The user asks a question in the chatbot UI.
2.  **Backend (FastAPI on Hugging Face Spaces)**: The request is sent to the live FastAPI endpoint.
3.  **Embedding**: The backend uses a Hugging Face Sentence Transformer model to convert the user's question into a vector.
4.  **Retrieval (Zilliz Cloud)**: The backend queries the Zilliz Cloud vector database with this vector to find the most relevant document chunks from the college knowledge base.
5.  **Generation (OpenRouter.ai)**: The retrieved document chunks and the original question are sent to a Mistral model via the OpenRouter.ai API.
6.  **Streaming Response**: The LLM generates the answer, which is streamed back through the FastAPI server to the React frontend, appearing word-by-word.

---
## 💻 Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js | Interactive chatbot user interface. |
| **Backend** | Python, **FastAPI** | High-performance, streaming-capable API server. |
| **Vector DB** | **Zilliz Cloud** | Cloud-native, serverless vector database for storing document embeddings. |
| **LLM Provider**| **OpenRouter.ai** | Access to state-of-the-art LLMs like Mistral. |
| **Embedding** | Hugging Face Sentence Transformers | Converts text to vector embeddings. |
| **Deployment** | **Hugging Face Spaces**, Docker | Containerized deployment and free hosting for the backend API. |

---
## 📂 Project Structure

```
backend/
  main.py # The FastAPI application logic
  requirements.txt # Python dependencies
  Dockerfile # Docker configuration for deployment
frontend/
  package.json
  README.md
  public/
    ...
  src/
    components/
      ...
```

---

## Installation
1. **Clone the repo:**
   ```bash
   git clone [https://github.com/krishna-chaitanya29/chatbot_faq.git](https://github.com/krishna-chaitanya29/chatbot_faq.git)
cd collage_bit
   ```
2. **Install dependencies:**
   - Backend:
     ```cd backend
pip install -r requirements.txt
     ```
   - Frontend:
     ```cd ../frontend
        npm install
     ```
3. **Set up environment variables:**
   - Create a `.env` file in `backend/` and add your # backend/.env
ZILLIZ_URI="your-zilliz-uri-goes-here"
ZILLIZ_TOKEN="your-zilliz-token-goes-here"
OPENROUTER_API_KEY="your-openrouter-key-goes-here"
 keys required.

---

## Running the Project
- **Start the backend:**
  ```bash
  # From the backend/ directory
    uvicorn main:app --reload
  ```
- **Start the frontend:**
  ```bash
  cd frontend
  npm start
  ```
- **Start the Flask server (for RAG):**
  ```bash
  # In your Python environment
  python app.py
  ```

---
## Deployment
This application is deployed on Hugging Face Spaces using a Docker container
- Continuous Deployment: Pushing changes to the main branch of the GitHub repository automatically triggers a new build and deployment on Hugging Face
- Secrets Management: All API keys and URIs are securely stored as "Repository secrets" in the Hugging Face Spaces settings, not in the code

---
## Future Improvements
- Implement a frontend UI for uploading new documents to update the knowledge base
- Add conversation history to allow for follow-up questions.
- Integrate a more advanced retriever (e.g., hybrid search) for better accuracy
- Create a frontend dashboard to monitor usage and user feedback

---

## Workflow of RAG

### Simple Local RAG Tutorial
![Simple Local RAG Tutorial](docs/simple_local_rag_tutorial.png)

### Retrieval-Augmented Generation Flow
![Retrieval-Augmented Generation Flow](docs/retrieval_augmented_generation_flow.png)

---

## License
This project is open source and available under the MIT License.

---

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Contact
For questions, reach out to [krishna-chaitanya29](https://github.com/krishna-chaitanya29).
