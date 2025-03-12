import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaComments, FaPaperPlane } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);

  // Initial bot message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessages = [
        {
          text: "Hello! I'm EcoBot, your sustainable farming assistant. How can I help you today?",
          sender: 'bot',
          id: Date.now()
        }
      ];
      setMessages(initialMessages);
      
      // Set initial suggestions
      setSuggestions([
        "Sustainable farming techniques",
        "How to maximize profits",
        "Organic certification",
        "Water conservation"
      ]);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    handleUserMessage(suggestion);
  };

  const handleUserMessage = (text) => {
    // Add user message
    const userMessage = {
      text,
      sender: 'user',
      id: Date.now()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prev => [...prev, {
        text: botResponse.text,
        sender: 'bot',
        id: Date.now()
      }]);
      
      // Update suggestions based on the conversation
      setSuggestions(botResponse.suggestions);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleUserMessage(inputValue);
    }
  };

  // Simulate bot responses based on user input
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return {
        text: "Hi there! How can I assist you with sustainable farming today?",
        suggestions: ["Tell me about organic farming", "How to reduce water usage", "Sustainable pest control"]
      };
    } else if (input.includes('profit') || input.includes('money') || input.includes('income')) {
      return {
        text: "Maximizing profits in sustainable farming involves optimizing yields, reducing input costs, and accessing premium markets. Would you like to learn more about any of these aspects?",
        suggestions: ["Yield optimization", "Reducing costs", "Premium markets", "Use the Profit Calculator"]
      };
    } else if (input.includes('organic') || input.includes('certification')) {
      return {
        text: "Organic certification requires following specific standards for at least 3 years. The process involves documentation, inspections, and maintaining organic practices. Would you like more details about the certification process?",
        suggestions: ["Certification costs", "Organic standards", "Transition period", "Certification benefits"]
      };
    } else if (input.includes('water') || input.includes('irrigation')) {
      return {
        text: "Water conservation is crucial for sustainable farming. Techniques include drip irrigation, rainwater harvesting, and soil moisture monitoring. Which would you like to explore further?",
        suggestions: ["Drip irrigation", "Rainwater harvesting", "Soil moisture sensors", "Water-efficient crops"]
      };
    } else if (input.includes('soil') || input.includes('fertility')) {
      return {
        text: "Healthy soil is the foundation of sustainable farming. Building soil fertility involves cover cropping, crop rotation, composting, and minimal tillage. What aspect interests you most?",
        suggestions: ["Cover crops", "Composting", "No-till farming", "Soil testing"]
      };
    } else if (input.includes('pest') || input.includes('disease')) {
      return {
        text: "Sustainable pest management uses integrated approaches like biological controls, crop diversity, and targeted interventions. Would you like to learn more about specific strategies?",
        suggestions: ["Biological controls", "Companion planting", "Crop rotation for pest control", "Natural pesticides"]
      };
    } else if (input.includes('resources') || input.includes('learn') || input.includes('guide')) {
      return {
        text: "We have many resources available! Check out our guides, videos, and tools in the Resources section of our website. Is there a specific topic you're interested in?",
        suggestions: ["Farming guides", "Video tutorials", "Calculation tools", "Go to Resources page"]
      };
    } else {
      return {
        text: "Thank you for your question. Our team of sustainable farming experts can provide more detailed information. Would you like to explore any of these common topics?",
        suggestions: ["Sustainable techniques", "Profit maximization", "Resource conservation", "Contact an expert"]
      };
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={toggleChat}>
        <FaComments className="chatbot-toggle-icon" />
      </div>
      
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <FaRobot className="chatbot-title-icon" />
            <span>EcoBot - Farming Assistant</span>
          </div>
          <button className="chatbot-close" onClick={toggleChat}>
            <FaTimes />
          </button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {suggestions.length > 0 && (
          <div className="chatbot-suggestions">
            {suggestions.map((suggestion, index) => (
              <button 
                key={index} 
                className="suggestion-button"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={!inputValue.trim()}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;