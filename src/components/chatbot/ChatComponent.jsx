import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "./chatcomponent.css"

const ChatComponent = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{role: "assistant", content: "Start typing and send messages to get started and learn more about me!"}]);
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

 
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ 
            behavior: 'smooth' ,
            block: "nearest",
            inline: "start"
        });
    };
    useEffect(() => {
        if(messages.length > 1) scrollToBottom()
    }, [messages]);
    /** 
     * Handle responses from axios' request to OpenAPI, send headers which defines the data sent,
     * should expect json 'messages' return with response of user
     */
    const handleSendMessage = async () => {
        if(!input) return;
        var tempInput = input;
        setMessages([...messages,  { role: 'user', content: tempInput }]);
        setLoading(true);
        setInput('');
        // Make a request to the ChatGPT API with the user input
        const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            messages: [
            { role: 'system', content: `You are a chatbot that only informs you about a website you exist on. 
                                        You are on a website that is a software developers portfolio and your sole purpose is 
                                        to answer questions that only pertain to the information contained within the website. 
                                        Do not hallucinate data, as important people, recruiters, and employees will be looking at this page and interacting with you.
                                        Within these quotes is all the information in the page: "
                                        Who is Gabriel Blackwell?

I am a Computer Engineering student at University of South Carolina, which belongs in the top 100 public universities in the US for engineering. My focus over the past year has been has been research outside of academics. My main focus is developing projects in the realm of Human-Computer Interactions and Human-Robot Interactions.
I graduate in December 2024.           

Experience
I am a highly self-motivated individual, actively seeking experience outside of academics
In-lab Development
I started working as a Research Volunteer beginning summer of 2022, I was then promoted to Paid Research Assistant at winter of 2023. I was granted additional paid hours due to work ethic. In the summer of 2023 I was promoted to a full time lab manager and lead software engineer.

Experience Summary
Languages: C#, C++, C, Java, JavaScript, Python, HTML/CSS, T-SQL, XML/XPath, Assembly/MIPS, System Verilog.

Frameworks: .NET, React.JS, React Native, Node.JS.

Positions Held: Research Assistant, Lab Manager, Full Stack Software Engineering Intern, Software Engineering Intern, Teaching Assistant.

Other: ROS1, git, OpenTelemetry, Firebase, WSL, UNIX/Bash, Unity, Android Studio, REST APIs.

Personal Work and Interests
Much of my in-lab and personal work is in web development, exploring new technologies in the space. Specifically developing chat-bots and creating innovative ways to communicate with an end user.

ALLURE

An interactive, educational platform using AI technology.

QuitSTART

An assistive healthcare application for rural recurring smokers.
Smart Mirror

A personal, restorative interactive smart-mirror.
Virtual Robot Arm

Enables remote technology for manufacturing workers.
MSNTASK

As lead software engineer, I've overseen and controlled study design, development, deployment, and data extraction/cleaning. Integrating React.js, Firebase, and python into one project to study user behavior in response to faux security prompts. A multi-university project between University Of Nevada, Las Vegas and University of South Carolina, seeks to explain and understand Dual-Task Interference theory.

Photography has been my main creative outlet for over 8 years. I have been shooting with Nikon for 6 years and occasionally I limit myself to weaker cameras to restrict choice and encourage creative ways of shooting. I also occasionally shoot using manual film cameras. If you would like to check out my work, you can refer to my portfolio below! It contains almost every piece of artwork I've shot over the past 2 years.
The website is: gabrielsblackwell.myportfolio.com

Youth4Youth

Youth4Youth is a privately funded React Native based application to help promote health literacy in uninformed, rural areas in the state of South Carolina. We are working with national healthcare sponsors and title one school districts in the upstate to provide an application and resources that are widely accessible to students that might not have the capabilities to garner information by any other means. The marketing team is working hard to establish an online presence on social media and creating a website. We're also working on getting paperwork filed to become an offical 501c non profit. A proof of concept application was created in React Native and was submitted for my Computer Science Capstone project at the University of South Carolina. We're continuing to work on developing and expanding the application and intiative.

#1 International Business University nationwide
Top 20 nationwide for best learning communities
Top 50 nationwide for best public university
My education at the University of South Carolina

As a full-time student in the Capital of South Carolina, I am in the process of getting a top quality education. My course load is split between electrical engineering classes to focus on micro-electronics and circuit analysis, and computer science to focus on algorithms and computer architecture.

If you're interested in speaking with me, my email is gabrielsblackwell@gmail.com"

keep responses 50 words or less.
Make sure you are not acting as Gabriel but answering questions about him.` },
            ...messages,
            { role: 'user', content: tempInput },
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
        .then(scrollToBottom())
        .catch((e) => {console.log("Error from OpenAPI: "+e)});;

        setLoading(false);
        // Messages holds all conversation history, append most recent response to the history
        // response.data <= axios API, choices[0].message.content <= openAI API
        setMessages([...messages,  { role: 'user', content: tempInput }, { role: 'assistant', content: response.data.choices[0].message.content }]);
        setInput('');
        scrollToBottom();
    };

    return (
        <div className='chatbot_section section__margin'>
            <div className='chatcontainer' id="chatbox">
                <div className='messages_box'>
                    {messages.map((message, index) => (
                    <div key={index} className={'message__'+message.role}>
                        {message.content}
                    </div>
                    ))}
                     <div ref={messagesEndRef} />
                </div>
                <div className="inputbox_container">
                    <input 
                    className="gradient__text"
                    type="text" 
                    value={input} 
                    placeholder='Start typing here...'
                    onChange={handleInputChange} />
                    <button 
                    className='gradient__bg'
                    onClick={handleSendMessage}
                    disabled={loading}
                    >Send</button>
                </div>
            </div>
            <div className="chatbot_explanation" id="ongoingprojects">
                <h1 className='gradient__text'>
                    Don't want to read the rest? Ask an AI about me instead!
                </h1>
                <p>
                    Through multiple projects in HI3TechLabs I've had the ability to work with ChatGPT.
                    I've attended workshops on machine learning ran by the Pittsburgh Supercomputing Center.
                    I have basic understanding of how to use OpenAI's API to create chatbots and through the workshops by PSC, I've use Pandas for ML to conduct data analysis. 
                    Ask this chatbot about my experiences, projects, or anything else you'd like to know!
                </p>
            </div>
        </div>
    );
};

export default ChatComponent