import React, { useState} from 'react'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer,ChatContainer, MessageList, Message,
    MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import GIT_API_KEY from "./api.js"; 
import Layout from "../../Layout/layout.js"

      const instructions = "Talk like you are a professor who is reviewing what the student gives you.";
      const API_KEY = GIT_API_KEY;
      // "Explain things like you would to a 10 year old learning how to code."
      const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
        "role": "system", "content": instructions
      }
      /*const assistant = openai.beta.assistants.create({
        name: "Data visualizer",
        description: "You are great at creating beautiful data visualizations. You analyze data present in .csv files, understand trends, and come up with data visualizations relevant to those trends. You also share a brief text summary of the trends observed.",
        //model: "gpt-4-1106-preview",
        model: "gpt-3.5-turbo",
        tools: [{"type": "code_interpreter"}],
      });*/

      
      function Chatbot() {
        const [messages, setMessages] = useState([
          {
            message: "Hello, Please enter your writing for me to review!",
            sentTime: "just now",
            sender: "ChatGPT"
          }
        ]);
        const [isTyping, setIsTyping] = useState(false);
      
        const handleSend = async (message) => {
          const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
          };
      
          const newMessages = [...messages, newMessage];
          
          setMessages(newMessages);
      
          // Initial system message to determine ChatGPT functionality
          // How it responds, how it talks, etc.
          setIsTyping(true);
          
          await processMessageToChatGPT(newMessages);
        };
      
        async function processMessageToChatGPT(chatMessages, retryCount = 0) {
          let apiMessages = chatMessages.map((messageObject) => {
            let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role: role, content: messageObject.message };
          });
        
          const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [systemMessage, ...apiMessages]
          }
        
          try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
              },
              body: JSON.stringify(apiRequestBody)
            });
        
            if (response.status === 429) {
              const MAX_RETRIES = 5; // Max number of retries
              const RETRY_DELAY = 5000; // Delay in milliseconds (5 seconds)
              if (retryCount < MAX_RETRIES) {
                alert(`Message failed. Retrying in ${RETRY_DELAY / 1000} seconds...`);
                await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (2 ** retryCount))); // Exponential backoff
                return processMessageToChatGPT(chatMessages, retryCount + 1);
              } else {
                throw new Error('Max retries reached');
              }
            }
        
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
        
            const data = await response.json();
            setMessages([...chatMessages, {
              message: data.choices[0].message.content,
              sender: "ChatGPT"
            }]);
            setIsTyping(false);
          } catch (error) {
            console.error("There was a problem with the fetch operation: ", error);
            // Optionally, update the UI to reflect the error
          }
        }
        
        return (
          <Layout>
          <div className=" ml-80">
            <div style={{ position:"relative", height: "800px", width: "500px",paddingTop:"120px", marginLeft:"350px" , paddingBottom:"10px" }}>
              <MainContainer>
                <ChatContainer>       
                  <MessageList 
                    scrollBehavior="smooth" 
                    typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                  >
                    {messages.map((message, i) => {
                      console.log(message)
                      return <Message key={i} model={message} />
                    })}
                  </MessageList>
                  <MessageInput placeholder="Type message here" onSend={handleSend} />        
                </ChatContainer>
              </MainContainer>
            </div>
          </div>
          </Layout>
        );
      };
      

export default Chatbot;
