import { useEffect, useRef, useState } from "react";
import getReply from "./getReply";
import { } from "react-router-dom";


export default function AiClone() {
    return (
        <>
            <header>
                <div className="flex">
                    <h1 id="aiclone" className="font-bold text-4xl mb-4">AI clone</h1>
                </div>
                <p className="mb-16 leading-relaxed text-stone-700 text-lg">
            an attempt to create an AI that would reply to all of your questions 
            <br/> like i would
            </p>
            </header>
            <Input />
            </>
    )
}



function Input() {
    const [text, setText] = useState("");
    const endRef = useRef(null)
    const [messages, setMessages] = useState([]);

const handleSend = async () => {
        const userMsg = { role: "user", content: text };
        setMessages((prev) => [...prev, userMsg]);
        setText("");

        const reply = await getReply([...messages, userMsg]); // passa tutto lo storico
        const aiMsg = { role: "assistant", content: reply };
        setMessages((prev) => [...prev, aiMsg]);
    };
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <div className="max-w-xl border-2 p-2 bg-slate-200 flex flex-col h-[32rem]">
            <div className="flex flex-col flex-1 overflow-y-auto px-2 space-y-1">
                {messages.map((msg, i) => (
                    <div
                        className={`${i%2 === 0 ? "self-end" : "self-start"} bg-white px-2 py-1 max-w-xs`}
                        key={i}
                    >
                       {msg.content} 
                    </div>
                ))}
                <div ref={endRef} />
            </div>

            <form 
                className="flex gap-2 pt-2"
            >
                <textarea
                    className="border-2 flex-1 bg-slate-50 outline-none p-2"
                    rows={2}
                    placeholder="ask anything"
                    value={text}
                    onChange={(e) => {setText(e.target.value)}}
                    onKeyDown={(e) => {
                        if(e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault()
                            handleSend(e)
                        }
                    }}
                />
                <button
                    type="submit"
                    className={`border-2 border-black w-10 h-10 font-bold text-white ${text === "" ? "bg-red-300" : "bg-rose-500"}`}
                >
                    ↑
                </button>
            </form>
        </div>
    );
}


