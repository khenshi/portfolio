// "use client";

// import { useState, useRef, useEffect } from "react";

// type Message = {
//   role: "user" | "assistant";
//   content: string;
// };

// export function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content: "Hi! I'm here to help answer questions about Khenyshi's portfolio. What would you like to know?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isOpen]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMessage: Message = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           messages: [...messages, userMessage].map((m) => ({
//             role: m.role,
//             content: m.content,
//           })),
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to get response");

//       const data = await response.json();
//       const assistantMessage: Message = {
//         role: "assistant",
//         content: data.message || "I'm sorry, I couldn't process that request.",
//       };

//       setMessages((prev) => [...prev, assistantMessage]);
//     } catch (error) {
//       const errorMessage: Message = {
//         role: "assistant",
//         content:
//           "I'm having trouble connecting right now. Please feel free to reach out via email at hinlogkhenyshi@gmail.com!",
//       };
//       setMessages((prev) => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <>
//       {/* Chat Button - Floating Circle Icon */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-purple-500 from-purple-500 to-cyan-400 p-0 shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
//         aria-label="Open chat"
//       >
//         {isOpen ? (
//           <svg
//             className="h-6 w-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             className="h-6 w-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
//             />
//           </svg>
//         )}
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] flex-col rounded-3xl border border-white/10 bg-[#0c0f16]/95 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-300 sm:w-[420px]">
//           {/* Header */}
//           <div className="flex items-center justify-between border-b border-white/10 p-4">
//             <div className="flex items-center gap-3">
//               <div className="h-3 w-3 rounded-full bg-green-400" />
//               <h3 className="text-sm font-semibold text-white">Portfolio Assistant</h3>
//             </div>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="rounded-full p-1 text-zinc-400 transition hover:bg-white/10 hover:text-white"
//               aria-label="Close chat"
//             >
//               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
//                     message.role === "user"
//                       ? "bg-gradient-to-br from-purple-500 to-cyan-400 text-white"
//                       : "bg-white/5 text-zinc-200 border border-white/10"
//                   }`}
//                 >
//                   <p className="text-sm leading-relaxed">{message.content}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5">
//                   <div className="flex gap-1">
//                     <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400 [animation-delay:-0.3s]" />
//                     <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
//                     <span className="h-2 w-2 animate-bounce rounded-full bg-purple-400" />
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="border-t border-white/10 p-4">
//             <div className="flex gap-2">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Ask me anything..."
//                 disabled={isLoading}
//                 className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 disabled:opacity-50"
//               />
//               <button
//                 onClick={handleSend}
//                 disabled={isLoading || !input.trim()}
//                 className="rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 p-2.5 text-white transition hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
//                 aria-label="Send message"
//               >
//                 <svg
//                   className="h-5 w-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
