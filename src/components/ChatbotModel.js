// src/components/ChatbotModel.js
import { useEffect, useRef, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPaperPlane, faRobot, faUser, faComments } from '@fortawesome/free-solid-svg-icons';
import './ChatbotModel.css';

const allSuggestions = [
  { question: 'What are the placement statistics?' },
  { question: 'Who is the head of the CSE department?' },
  { question: 'What subjects are in the first year?' },
  { question: 'Tell me about the faculty.' },
  { question: 'What are the college timings?' },
  { question: 'How to apply for admission?' },
];

function ChatbotModel() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      isUser: false,
      message: '👋 Welcome to KMIT FAQ Chatbot! I\'m here to help you with any questions about admissions, placements, faculty, subjects, and more. How can I assist you today?'
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState('faqs');
  const [suggestions, setSuggestions] = useState([]);
  const chatHistoryRef = useRef(null);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : allSuggestions.filter(
          (sugg) => sugg.question.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion) => suggestion.question;

  const renderSuggestion = (suggestion) => <div>{suggestion.question}</div>;

  const handleInputChange = (event, { newValue }) => {
    setInputText(newValue);
  };



  const handleSubmit = async () => {
    if (!inputText.trim()) return;

    const questionToSend = inputText;
    setLoading(true);
    setError(null);
    setInputText('');

    // Add user message and an empty bot message to chat history
    setChatHistory(prev => [
      ...prev,
      { isUser: true, message: questionToSend },
      { isUser: false, message: '' },
    ]);

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/stream_query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: questionToSend,
          category: activeCategory,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const fullText = await response.text();
      
      // A more robust way to "stream" the text to the UI
      const streamText = async (text) => {
        for (let i = 0; i < text.length; i++) {
          await new Promise(resolve => setTimeout(resolve, 10)); // Typing speed
          setChatHistory(prev => {
            const lastMessage = prev[prev.length - 1];
            const updatedLastMessage = {
              ...lastMessage,
              message: lastMessage.message + text[i],
            };
            return [...prev.slice(0, -1), updatedLastMessage];
          });
        }
        setLoading(false);
      };

      streamText(fullText);

    } catch (error) {
      console.error('Error fetching or streaming response:', error);
      setChatHistory(prev => {
        const lastMessage = prev[prev.length - 1];
        const updatedLastMessage = {
          ...lastMessage,
          message: 'An error occurred while generating the response.',
        };
        return [...prev.slice(0, -1), updatedLastMessage];
      });
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const inputProps = {
    placeholder: 'Ask a question',
    value: inputText,
    onChange: handleInputChange,
    onKeyPress: (e) => e.key === 'Enter' && handleSubmit(),
  };

  return (
    <>
      {!isChatOpen && (
        <div className="chatbot-icon" onClick={toggleChat}>
          <FontAwesomeIcon icon={faComments} className="chatbot-icon-svg" />
        </div>
      )}
      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <FontAwesomeIcon icon={faRobot} className="chatbot-header-icon" />
              <h2>KMIT FAQ Chatbot</h2>
            </div>
            <button className="close-chat-button" onClick={toggleChat}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="chat-history" ref={chatHistoryRef}>
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.isUser ? 'user' : 'bot'}`}
              >
                <div className="message-icon">
                  <FontAwesomeIcon icon={msg.isUser ? faUser : faRobot} />
                </div>
                <div className="message-content">
                  {msg.isUser ? (
                    <p>{msg.message}</p>
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {msg.message}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="faq-section">
            <div className="faq-category-list">
              {['faqs', 'placements', 'subjects', 'faculty', 'other'].map((category) => (
                <button
                  key={category}
                  className={`faq-category-button ${
                    activeCategory === category ? 'active' : ''
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-input">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
            <button onClick={handleSubmit} disabled={loading} className="send-button">
              {loading ? <div className="spinner" /> : <FontAwesomeIcon icon={faPaperPlane} />}
            </button>
          </div>
          {error && <div className="error-message">{error}</div>}
        </div>
      )}
    </>
  );
}

export default ChatbotModel;