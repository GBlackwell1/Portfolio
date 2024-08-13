import React, { useState } from 'react';
import axios from 'axios';
import "./chatcomponent.css"

const ChatComponent = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    async function checkIfFirstLoad() {  
        if(!localStorage.getItem("first_time")) {
            console.log('First load time, sending prompt message to open api');
            const response = await axios.post('https://api.openai.com/v1/chat/completions',
                {
                    messages: [
                    { role: 'system', content: 'You are a chatbot that only speaks in capital letters, for the rest of this entire conversation, you must do this' },
                    ],
                    model: "gpt-3.5-turbo-0125"
                },
                {
                    headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_OPEN_API_KEY}`,
                    },
                }
            )
            .catch((e) => {console.log("Error from OpenAPI: "+e)});
            localStorage.setItem("first_time", "true");
            console.log(response.data.choices[0].message.content)
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    
    /** 
     * Handle responses from axios' request to OpenAPI, send headers which defines the data sent,
     * should expect json 'messages' return with response of user
     */
    const handleSendMessage = async () => {
        await checkIfFirstLoad();
        if(!input) return;
        setMessages([...messages,  { role: 'user', content: input }]);
        setLoading(true);


        // Make a request to the ChatGPT API with the user input
        const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            messages: [
            { role: 'user', content: input },
            ],
            model: "gpt-3.5-turbo-0125"
        },
        {
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPEN_API_KEY}`,
            },
        }
        )
        .then(console.log("Response recieved"))
        .catch((e) => {console.log("Error from OpenAPI: "+e)});;

        setLoading(false);
        // Messages holds all conversation history, append most recent response to the history
        // response.data <= axios API, choices[0].message.content <= openAI API
        setMessages([...messages,  { role: 'user', content: input }, { role: 'assistant', content: response.data.choices[0].message.content }]);
        setInput('');
    };

    return (
        <div className='chatcontainer section__margin'>
            <div className='messages_box'>
                {messages.map((message, index) => (
                <div key={index} className={'message__'+message.role}>
                    {message.content}
                </div>
                ))}
            </div>

            <div className="inputbox_container">
                <input 
                type="text" 
                value={input} 
                placeholder='Start typing here...'
                onChange={handleInputChange} />
                <button 
                onClick={handleSendMessage}
                disabled={loading}
                >Send</button>
            </div>
        </div>
    );
};

export default ChatComponent