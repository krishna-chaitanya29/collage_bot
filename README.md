# Production-Grade RAG FAQ Chatbot

An AI-powered FAQ chatbot that answers user queries about our college using a production-ready, cloud-native Retrieval-Augmented Generation (RAG) architecture. It retrieves relevant information from a cloud-hosted vector database and generates accurate, context-aware, streaming responses.

This project has moved from a local prototype to a fully deployed application hosted on Hugging Face Spaces.

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
---

## Project Structure
```
backend/
  package.json
  server.js
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
   git clone https://github.com/krishna-chaitanya29/chatbot_faq.git
   cd chatbot_faq
   ```
2. **Install dependencies:**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```
3. **Set up environment variables:**
   - Create a `.env` file in `backend/` and add your MongoDB URI and any API keys required.

---

## Running the Project
- **Start the backend:**
  ```bash
  cd backend
  npm start
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

## Future Improvements
- Multi-language support
- Voice-based interaction
- More efficient retriever (BM25, Hybrid search)
- Deploy on cloud (AWS/GCP/Heroku)

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
