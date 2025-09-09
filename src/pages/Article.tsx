import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockArticle = {
  id: 1,
  title: "信息管理毕业年薪30万？如何进大厂做产品",
  content: `
    <p>大家好，我是宗拓，目前在阿里巴巴担任高级产品经理。今天想和大家分享一下信息管理专业如何转型做产品经理，以及如何进入大厂的经验。</p>
    
    <h2>为什么选择产品经理？</h2>
    <p>信息管理专业的同学具备天然的优势：</p>
    <ul>
      <li>对数据敏感，懂得如何分析用户行为</li>
      <li>具备系统性思维，能够统筹全局</li>
      <li>了解技术基础，与开发沟通无障碍</li>
    </ul>
    
    <h2>如何准备产品经理面试？</h2>
    <p>在我的面试经历中，发现很多候选人都会犯这些错误...</p>
    
    <h2>薪资水平与发展前景</h2>
    <p>以我在阿里的经验来看，产品经理的薪资结构通常是...</p>
  `,
  mentor: {
    id: 1,
    name: "宗拓",
    title: "阿里巴巴高级产品经理",
    avatar: "👨‍💼",
    company: "阿里巴巴"
  },
  publishTime: "2024-01-15",
  readCount: "8000+"
};

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleMentorClick = () => {
    navigate(`/mentor/${mockArticle.mentor.id}`);
  };

  const handleChatClick = () => {
    navigate(`/mentor/${mockArticle.mentor.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <div className="px-4 py-6">
        <h1 className="title-l mb-4 text-title">{mockArticle.title}</h1>
        
        {/* Author Info - Clickable */}
        <div 
          className="flex items-center gap-3 p-3 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-fast mb-6"
          onClick={handleMentorClick}
        >
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-lg">{mockArticle.mentor.avatar}</span>
          </div>
          <div className="flex-1">
            <div className="body-l font-medium text-title">{mockArticle.mentor.name}</div>
            <div className="body-m text-caption">{mockArticle.mentor.title}</div>
          </div>
          <Button variant="ghost" className="caption">
            关注
          </Button>
        </div>

        <div className="flex items-center gap-4 caption text-caption mb-6">
          <span>{mockArticle.publishTime}</span>
          <span>阅读人数 {mockArticle.readCount}</span>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-4 pb-20">
        <div className="ai-card">
          <div 
            className="body-l text-body leading-relaxed prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: mockArticle.content }}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
        <Button 
          variant="cta" 
          className="w-full"
          onClick={handleChatClick}
        >
          与 {mockArticle.mentor.name} 聊聊
        </Button>
      </div>
    </div>
  );
};

export default Article;