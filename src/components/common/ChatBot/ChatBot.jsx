import React, { useState, useEffect, useRef } from 'react';
import { FaRobot, FaTimes, FaComments, FaPaperPlane } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  // State management using React hooks
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  // Ref for auto-scrolling messages
  const messagesEndRef = useRef(null);

  // Initial bot message when chat is opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessages = [
        {
          text: "Namaste! I'm Kisan Mitra, your sustainable farming assistant for Indian agriculture. How can I help you today?",
          sender: 'bot',
          id: Date.now()
        }
      ];
      setMessages(initialMessages);
      
      // Set initial suggestions relevant to Indian agriculture
      setSuggestions([
        "Organic farming techniques",
        "Crop rotation methods",
        "Government schemes",
        "Water conservation"
      ]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Toggle chatbot open/closed
  const toggleChat = () => {
    setIsOpen(prevState => !prevState);
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle suggestion button clicks
  const handleSuggestionClick = (suggestion) => {
    handleUserMessage(suggestion);
  };

  // Process user messages and generate bot responses
  const handleUserMessage = (text) => {
    // Add user message to chat
    const userMessage = {
      text,
      sender: 'user',
      id: Date.now()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prevMessages => [...prevMessages, {
        text: botResponse.text,
        sender: 'bot',
        id: Date.now()
      }]);
      
      // Update suggestions based on the conversation
      setSuggestions(botResponse.suggestions);
    }, 1000);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      handleUserMessage(inputValue);
    }
  };

  // Generate bot responses based on user input - adapted for Indian agriculture with ₹ currency
  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || 
        input.includes('namaste')) {
      return {
        text: "Namaste! How can I assist you with sustainable farming in India today?",
        suggestions: ["Organic farming", "Crop protection", "Government subsidies", "Water management"]
      };
    } 
    
    // Profit related queries
    else if (input.includes('profit') || input.includes('money') || input.includes('income')) {
      return {
        text: "Maximizing profits in sustainable farming in India involves optimizing yields, reducing input costs, and accessing premium markets. Organic products can fetch 20-40% higher prices, with premium organic rice selling for ₹80-120 per kg compared to ₹40-60 for conventional rice. Would you like to learn more about any specific aspect?",
        suggestions: ["Increasing crop yield", "Reducing costs", "Premium markets", "Use the Profit Calculator"]
      };
    } 
    
    // Organic certification
    else if (input.includes('organic') || input.includes('certification')) {
      return {
        text: "Organic certification in India requires following PGS-India or NPOP standards. The process costs approximately ₹15,000-30,000 for small farms and involves documentation, inspections, and maintaining organic practices for at least 3 years. The certification can help you earn premium prices of 20-40% higher than conventional products. Would you like more details?",
        suggestions: ["Certification costs", "Organic standards", "Transition period", "Certification benefits"]
      };
    } 
    
    // Water management
    else if (input.includes('water') || input.includes('irrigation')) {
      return {
        text: "Water conservation is crucial for Indian agriculture. Drip irrigation systems cost approximately ₹25,000-50,000 per acre but can reduce water usage by 30-50% and increase yields by 20-30%. Government schemes like PM-KUSUM and PMKSY offer subsidies of up to 55-90% on these systems. Which water conservation method would you like to explore further?",
        suggestions: ["Drip irrigation", "Rainwater harvesting", "Soil moisture sensors", "Water-efficient crops"]
      };
    } 
    
    // Soil health
    else if (input.includes('soil') || input.includes('fertility')) {
      return {
        text: "Healthy soil is the foundation of sustainable farming. Soil testing under the Soil Health Card Scheme in India is free or nominally priced (₹10-50 per sample). Using organic compost can save ₹2,000-5,000 per acre on chemical fertilizers while improving yields by 10-15%. What aspect of soil management interests you most?",
        suggestions: ["Cover crops", "Composting", "No-till farming", "Soil testing"]
      };
    } 
    
    // Pest management
    else if (input.includes('pest') || input.includes('disease')) {
      return {
        text: "Sustainable pest management can reduce pesticide costs by ₹3,000-8,000 per acre. Neem-based products (₹400-800 per liter) are widely used in India as natural pesticides. Integrated Pest Management can reduce pest damage by 60-80% while minimizing chemical use. Would you like to learn more about specific strategies?",
        suggestions: ["Biological controls", "Companion planting", "Crop rotation for pest control", "Natural pesticides"]
      };
    } 
    
    // Government schemes
    else if (input.includes('scheme') || input.includes('subsidy') || input.includes('government')) {
      return {
        text: "The Indian government offers several schemes for sustainable farming. PKVY provides ₹50,000 per hectare over three years. PM-KUSUM offers up to 90% subsidy on solar pumps. PMKSY provides subsidies of ₹15,000-60,000 per hectare for micro-irrigation. Which scheme would you like to know more about?",
        suggestions: ["PKVY", "PM-KUSUM", "PMKSY", "Mission Organic Value Chain Development"]
      };
    } 
    
    // Regional farming
    else if (input.includes('region') || input.includes('state') || input.includes('climate')) {
      return {
        text: "India's diverse climate influences regional farming practices and profitability. In Punjab and Haryana, wheat can yield profits of ₹30,000-50,000 per acre. In Kerala and Tamil Nadu, spices and coconut can generate ₹60,000-1,00,000 per acre. In West Bengal, sustainable rice cultivation can yield ₹25,000-40,000 per acre. Which region would you like to learn about?",
        suggestions: ["North India", "South India", "East India", "West India"]
      };
    } 
    
    // Resources and learning
    else if (input.includes('resources') || input.includes('learn') || input.includes('guide')) {
      return {
        text: "We have many resources available! Our training programs range from free online resources to comprehensive courses (₹2,000-15,000). Krishi Vigyan Kendra (KVK) offers subsidized training programs, often at just ₹500-2,000 for multi-day workshops. Is there a specific topic you're interested in?",
        suggestions: ["Farming guides", "Video tutorials", "Calculation tools", "Training programs"]
      };
    } 
    
    // Crop specific information
    else if (input.includes('rice') || input.includes('wheat') || input.includes('cotton')) {
      return {
        text: "For major Indian crops, sustainable practices show promising returns. SRI rice cultivation can increase yields by 20-40% with profits of ₹30,000-45,000 per acre. Zero tillage wheat can save ₹2,000-4,000 per acre in cultivation costs. Organic cotton can fetch premium prices of ₹6,000-8,000 per quintal versus ₹4,500-5,500 for conventional. Which crop would you like to know more about?",
        suggestions: ["Rice (SRI method)", "Wheat (Zero tillage)", "Cotton (Organic)", "Pulses (Mixed cropping)"]
      };
    }
    
    // Market prices
    else if (input.includes('price') || input.includes('market') || input.includes('sell')) {
      return {
        text: "The Indian market for organic products is growing at 25% annually. Organic rice sells for ₹80-120 per kg versus ₹40-60 for conventional. Organic vegetables command ₹60-100 per kg versus ₹30-50 for conventional. Through e-NAM and direct marketing, you can often secure 15-25% higher prices by eliminating middlemen. Would you like more pricing information?",
        suggestions: ["Pricing strategies", "e-NAM", "Organic markets", "Export opportunities"]
      };
    }
    
    // Equipment and technology
    else if (input.includes('equipment') || input.includes('technology') || input.includes('tools')) {
      return {
        text: "Modern sustainable farming equipment can improve efficiency while reducing costs. Small tractors (₹2-4 lakh) are available with 25-50% subsidy through government schemes. Drone services for pest monitoring cost ₹500-1,000 per acre. Solar pumps (₹1-3 lakh) come with 70-90% subsidy under PM-KUSUM. Which technology interests you?",
        suggestions: ["Farm mechanization", "Solar equipment", "Precision farming", "Low-cost tools"]
      };
    }
    
    // Default response
    else {
      return {
        text: "Thank you for your question. Our team of sustainable farming experts can provide more detailed information specific to Indian agriculture. Would you like to explore any of these common topics?",
        suggestions: ["Sustainable techniques", "Profit maximization", "Resource conservation", "Contact an expert"]
      };
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-toggle" onClick={toggleChat} aria-label="Open chat assistant">
        <FaComments className="chatbot-toggle-icon" />
      </div>
      
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <FaRobot className="chatbot-title-icon" />
            <span>Kisan Mitra - Farming Assistant</span>
          </div>
          <button className="chatbot-close" onClick={toggleChat} aria-label="Close chat assistant">
            <FaTimes />
          </button>
        </div>
        
        <div className="chatbot-messages" aria-live="polite">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.sender}`} role={message.sender === 'bot' ? 'status' : 'user'}>
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
                aria-label={`Suggest: ${suggestion}`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        
        <form className="chatbot-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputValue}
            onChange={handleInputChange}
            aria-label="Message input"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;