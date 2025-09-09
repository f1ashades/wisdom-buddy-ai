import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/ArticleCard";
import { MajorSelector } from "@/components/MajorSelector";

const mockArticles = [
  {
    id: 1,
    title: "信息管理毕业年薪30万？如何进大厂做产品",
    summary: "从0到1规划产品经理的职业发展路径，分享我在阿里巴巴的实战经验...",
    mentor: {
      id: 1,
      name: "宗拓",
      title: "阿里巴巴高级产品经理",
      avatar: "👨‍💼",
      company: "阿里巴巴"
    },
    readCount: "8000+",
    collectCount: "2032"
  },
  {
    id: 2,
    title: "如何从技术转型到产品经理？我的转换心得",
    summary: "技术背景转产品的优势与挑战，以及如何快速适应新角色...",
    mentor: {
      id: 2,
      name: "李雯",
      title: "腾讯产品总监",
      avatar: "👩‍💼",
      company: "腾讯"
    },
    readCount: "6500+",
    collectCount: "1520"
  },
  {
    id: 3,
    title: "数据分析师的职业规划：从初级到专家",
    summary: "数据分析领域的发展路径详解，包含技能树和薪资预期...",
    mentor: {
      id: 3,
      name: "王明",
      title: "字节跳动数据科学家",
      avatar: "👨‍💻",
      company: "字节跳动"
    },
    readCount: "5200+",
    collectCount: "980"
  }
];

const Home = () => {
  const [selectedMajor, setSelectedMajor] = useState("当前专业");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMajorSelector, setShowMajorSelector] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Major Selection */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setShowMajorSelector(!showMajorSelector)}
            >
              <span className="body-m">{selectedMajor}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="secondary" className="body-m">
              重新选择
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-caption" />
            <Input
              placeholder="搜索导师姓名、行业、职位..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 body-m"
            />
          </div>
        </div>
      </div>

      {/* Major Selector Modal */}
      {showMajorSelector && (
        <MajorSelector
          selectedMajor={selectedMajor}
          onSelect={(major) => {
            setSelectedMajor(major);
            setShowMajorSelector(false);
          }}
          onClose={() => setShowMajorSelector(false)}
        />
      )}

      {/* Articles List */}
      <div className="px-4 py-4 space-y-4">
        {mockArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load More */}
      <div className="px-4 pb-8">
        <Button variant="ghost" className="w-full body-m">
          加载更多文章...
        </Button>
      </div>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border h-16 flex items-center justify-around">
        <div className="text-center">
          <div className="caption text-primary">专业广场</div>
        </div>
        <div className="text-center">
          <div className="caption text-caption">独家导师</div>
        </div>
        <div className="text-center">
          <div className="caption text-caption">个人中心</div>
        </div>
      </div>
    </div>
  );
};

export default Home;