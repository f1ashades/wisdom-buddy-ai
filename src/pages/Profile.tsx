import { useNavigate } from "react-router-dom";
import { ChevronRight, User, BookOpen, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockUser = {
  avatar: "👨‍💻",
  nickname: "张同学",
  unlockedMentors: [
    {
      id: 1,
      name: "宗拓",
      title: "阿里巴巴高级产品经理", 
      avatar: "👨‍💼",
      lastChat: "2 小时前"
    },
    {
      id: 2,
      name: "李雯",
      title: "腾讯产品总监",
      avatar: "👩‍💼", 
      lastChat: "1 天前"
    }
  ]
};

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: <User className="w-5 h-5" />,
      title: "我解锁的导师",
      subtitle: `${mockUser.unlockedMentors.length} 位导师`,
      onClick: () => navigate("/my-mentors")
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "文章阅读历史",
      subtitle: "查看历史记录",
      onClick: () => {}
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: "升级VIP会员",
      subtitle: "敬请期待",
      onClick: () => {},
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-4 py-8">
        <h1 className="title-l text-center mb-8">个人中心</h1>
        
        {/* User Info */}
        <div className="ai-card text-center mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            {mockUser.avatar}
          </div>
          <div className="title-m text-title mb-2">{mockUser.nickname}</div>
          <div className="body-m text-caption">微信用户</div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            disabled={item.disabled}
            className={`w-full ai-card flex items-center justify-between transition-fast ${
              item.disabled 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:shadow-md cursor-pointer"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                item.disabled ? "bg-muted" : "bg-primary/10"
              }`}>
                <div className={item.disabled ? "text-caption" : "text-primary"}>
                  {item.icon}
                </div>
              </div>
              <div className="text-left">
                <div className="body-l font-medium text-title">{item.title}</div>
                <div className="caption text-caption">{item.subtitle}</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-caption" />
          </button>
        ))}
      </div>

      {/* Quick Access to Unlocked Mentors */}
      {mockUser.unlockedMentors.length > 0 && (
        <div className="px-4 mt-8">
          <h2 className="title-m mb-4">最近对话</h2>
          <div className="space-y-3">
            {mockUser.unlockedMentors.slice(0, 2).map((mentor) => (
              <button
                key={mentor.id}
                onClick={() => navigate(`/chat/${mentor.id}`)}
                className="w-full ai-card flex items-center gap-4 text-left hover:shadow-md transition-fast cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground">{mentor.avatar}</span>
                </div>
                <div className="flex-1">
                  <div className="body-m font-medium text-title">{mentor.name}</div>
                  <div className="caption text-caption">{mentor.title}</div>
                </div>
                <div className="caption text-caption">{mentor.lastChat}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border h-16 flex items-center justify-around">
        <div className="text-center">
          <div className="caption text-caption">专业广场</div>
        </div>
        <div className="text-center">
          <div className="caption text-caption">独家导师</div>
        </div>
        <div className="text-center">
          <div className="caption text-primary">个人中心</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;