import { useEffect, useState } from "react";



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

  const handleSend = () => {
    setText(""); 
  };

  return (
    <div className="bg-slate-200 flex justify-center items-baseline-last h-160 max-w-2xl border-2 p-2">
      <div className="flex justify-center items-center w-full">
        <textarea
          className="border-2 w-full outline-none mb-0 pl-2 py-1 bg-slate-50"
          rows={2}
          placeholder="ask anything"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="border-2 border-black w-8 ml-1 h-8 font-bold text-white bg-rose-500"
          onClick={handleSend}
        >
          ↑
        </button>
      </div>
    </div>
  );
}


