# FAQ Chatbot with RAG

An AI-powered FAQ chatbot that answers user queries using Retrieval-Augmented Generation (RAG). It retrieves relevant information from a knowledge base and generates accurate, context-aware responses.

---

## 🚀 Features
- Answers frequently asked questions with high accuracy.
- Uses RAG (Retrieval + Generation) to combine search + AI reasoning.
- Easily updatable knowledge base (FAQs, documents).
- Simple interface for interaction (Web UI).
- Scalable and customizable.

---

## How RAG Works
1. **User asks a question** (e.g., "What is the refund policy?")
2. **Retriever searches the knowledge base** (FAQs, documents).
3. **Top relevant results are passed to the LLM** (Large Language Model).
4. **LLM generates an answer** using both retrieved text and its own knowledge.



## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **AI/ML:** Python (Flask), Hugging Face Transformers, Sentence Transformers
- **Other:** Axios, Natural Language Toolkit (NLTK)

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
