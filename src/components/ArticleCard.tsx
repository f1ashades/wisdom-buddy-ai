import { useNavigate } from "react-router-dom";

interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  company: string;
}

interface Article {
  id: number;
  title: string;
  summary: string;
  mentor: Mentor;
  readCount: string;
  collectCount: string;
}

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleMentorClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/mentor/${article.mentor.id}`);
  };

  const handleArticleClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (
    <div 
      className="ai-card cursor-pointer hover:shadow-md transition-fast"
      onClick={handleArticleClick}
    >
      {/* Article Content */}
      <div className="mb-4">
        <h3 className="title-m mb-2 text-title line-clamp-2">
          {article.title}
        </h3>
        <p className="body-m text-caption line-clamp-2">
          {article.summary}
        </p>
      </div>

      {/* Mentor Info Bar - Clickable */}
      <div 
        className="flex items-center justify-between p-3 bg-muted rounded-xl cursor-pointer hover:bg-muted/80 transition-fast"
        onClick={handleMentorClick}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground">{article.mentor.avatar}</span>
          </div>
          <div>
            <div className="body-m font-medium text-title">{article.mentor.name}</div>
            <div className="caption text-caption">{article.mentor.title}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="caption text-caption">阅读人数 {article.readCount}</div>
          <div className="caption text-caption">收藏人数 {article.collectCount}</div>
        </div>
      </div>
    </div>
  );
};