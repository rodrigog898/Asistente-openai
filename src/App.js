import React, { useState, useEffect, useRef } from 'react';
import botImage from './chat.jpg';
import './chatbot.css';

export default function ChatBot() {
  const [messages, setMessages] = useState([{ text: "¡Hola!", sender: "bot" }]);
  const [userMessage, setUserMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const sendMessage = async () => {
    if (userMessage.trim() === '') return;

    const newMessage = { text: userMessage, sender: "user" };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setUserMessage('');
    setIsLoading(true);

    try {
      const conversation = updatedMessages.map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      }));

      const response = await fetch('https://api.openai.com/v1/threads/runs', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer Token`,
            'Content-Type': 'application/json',
            'OpenAI-Beta': 'assistants=v2',
        },
        body: JSON.stringify({
            assistant_id: 'id_asistente',
            thread: {
                messages: conversation,
            },
            stream: true,
        }),
    });

      const reader = response.body.getReader();
      let botResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const events = chunk.split('\n\n').filter(Boolean);

        for (const event of events) {
          if (event.startsWith('event: thread.message.delta')) {
            const data = JSON.parse(event.split('data: ')[1]);
            const content = data.delta.content;

            if (content && content.length > 0 && content[0].type === 'text') {
              botResponse += content[0].text.value;

              setMessages((prevMessages) => {
                const lastMessage = prevMessages[prevMessages.length - 1];

                if (lastMessage && lastMessage.sender === "bot") {
                  return [
                    ...prevMessages.slice(0, prevMessages.length - 1),
                    { text: botResponse, sender: "bot" }
                  ];
                } else {
                  return [
                    ...prevMessages,
                    { text: botResponse, sender: "bot" }
                  ];
                }
              });
            }
          }
        }
      }

    } catch (error) {
      console.error('Error al enviar mensaje al chatbot:', error);
      setMessages((prevMessages) => [...prevMessages, { text: "Error al conectar con el servidor", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const renderMessage = (msg, index) => {
    return (
      <div key={index} className={`chat-message ${msg.sender}`}>
        {msg.sender === "bot" && (
          <img src={botImage} alt="Bot Icon" />
        )}
        <div className="chat-bubble">{msg.text}</div>
      </div>
    );
  };

  return (
    <>
      {isChatOpen ? (
        <div className="chatbot-container">
          <div className="chat-window">
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={botImage} alt="Bot Icon" loading="lazy" />
                <h3>Asistente Virtual</h3>
              </div>
              <button className="close-button" onClick={closeChat}>✕</button>
            </div>
            <div className="chat-body">
              {messages.map((msg, index) => renderMessage(msg, index))}
              {isLoading && (
                <div className="chat-message bot">
                  <img src={botImage} alt="Bot Icon" loading="lazy" />
                  <div className="chat-bubble loading"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="chat-footer">
              <input
                type="text"
                value={userMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Escribe un mensaje ..."
              />
              <button onClick={sendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="chat-icon" onClick={toggleChat}>
            <span>💬</span>
          </div>
          {showWelcome && (
            <div className="welcome-container">
              <div className="welcome-message">
                ¿En qué puedo ayudarle hoy? <span role="img" aria-label="celebrate">🙌</span>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
