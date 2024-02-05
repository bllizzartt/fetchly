import React, { useState } from 'react';
import axios from 'axios';

// Axios instance for OpenAI API
const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer sk-your-api-key`, // Replace with your actual API key
  },
});

// Function to create chat completion
async function createChatCompletion(messages, options = {}) {
  try {
    const response = await openai.post("/chat/completions", {
      model: options.model || "gpt-4",
      messages,
      ...options,
    });

    return response.data.choices;
  } catch (error) {
    console.error("Error creating chat completion:", error.response ? error.response.data : error);
    throw error;
  }
}

// React component for OpenAI interaction
function OpenAi() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleButtonClick = async () => {
    setIsLoading(true);
    setError('');
    setResponse('');

    const messages = [
      { role: "user", content: "what is 2 + 2" },
    ];

    const options = {
      temperature: 0.8,
      max_tokens: 100,
    };

    try {
      const choices = await createChatCompletion(messages, options);
      if (choices && choices.length > 0) {
        setResponse(choices[0].message.content);
      } else {
        setResponse("No response from OpenAI.");
      }
    } catch (error) {
      setError('Failed to get response from OpenAI.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? 'Asking...' : 'Ask OpenAI'}
      </button>
      {response && <p>Response: {response}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default OpenAi;
