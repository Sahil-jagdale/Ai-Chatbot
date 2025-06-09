import { useRef } from "react";

const ChatForm = ({ chatHistory, setchatHistory, generateBotResponse }) => {
    const inputRef = useRef();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = "";
        setchatHistory(history => [...history, { role: "user", text: userMessage }]);
        //thinking
        setTimeout(() => {
            setchatHistory(history => [...history, { role: "model", text: "Thinking..." }]);
            generateBotResponse([...chatHistory, { role: "user", text: `Using the details provided above, please address this query:${userMessage}` }]);
        }, 600);
    }
    return (
        <form action="#" className="chat-form" onSubmit={handleOnSubmit}>
            <input ref={inputRef} type="text" placeholder="message..." className="message-input" required />
            <button className="material-symbols-rounded">
                arrow_upward
            </button>
        </form>
    )
}

export default ChatForm;