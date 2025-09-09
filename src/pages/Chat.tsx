import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const mockMentor = {
  id: 1,
  name: "宗拓",
  title: "阿里巴巴高级产品经理",
  avatar: "👨‍💼"
};

const suggestedQuestions = [
  "产品经理需要掌握哪些核心技能？",
  "如何从0到1规划一个产品？", 
  "怎样准备产品经理面试？"
];

const Chat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: `你好！我是${mockMentor.name}，很高兴能与你交流产品经理相关的话题。我在互联网行业摸爬滚打了8年，从0到1做过多个千万用户级产品。想聊什么都可以，我会根据我的实际经历给你最真实的建议。`,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setShowSuggestions(false);
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: "这是一个很好的问题！根据我在阿里巴巴的经验，我认为...",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSuggestionClick = (question: string) => {
    sendMessage(question);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center gap-3 p-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground">{mockMentor.avatar}</span>
          </div>
          <div>
            <div className="body-m font-medium text-title">{mockMentor.name}</div>
            <div className="caption text-caption">{mockMentor.title}</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-4 space-y-4 pb-32">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.isUser ? 'chat-bubble-user' : 'chat-bubble-ai'}`}>
              <div className="body-l">{message.text}</div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="chat-bubble-ai">
              <div className="flex items-center gap-1">
                <span className="body-l">正在输入</span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-caption rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-caption rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-caption rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Suggested Questions */}
        {showSuggestions && (
          <div className="space-y-2">
            <div className="caption text-caption px-2">💡 你可以问我：</div>
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4 body-m"
                onClick={() => handleSuggestionClick(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="输入你的问题..."
            className="flex-1"
          />
          <Button 
            type="submit" 
            size="icon"
            disabled={!inputText.trim() || isTyping}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;