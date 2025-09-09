import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PaymentSheet } from "@/components/PaymentSheet";

const mockMentor = {
  id: 1,
  name: "宗拓",
  title: "阿里巴巴高级产品经理",
  avatar: "👨‍💼",
  company: "阿里巴巴",
  education: "清华大学",
  level: "大厂P9",
  position: "资深产品经理",
  description: "你好，我是宗拓。为了能将我的经验帮助到更多同学，我通过口述导师复刻了我的认知体系，创造了独家数字分身。TA将7x24小时为你服务，分享我最真实的思考。",
  milestones: [
    {
      year: "2018",
      title: "加入阿里巴巴",
      description: "担任产品经理，负责用户增长"
    },
    {
      year: "2020", 
      title: "晋升高级产品经理",
      description: "主导多个核心产品功能"
    },
    {
      year: "2022",
      title: "P9产品专家",
      description: "负责战略级产品规划"
    }
  ],
  isUnlocked: false
};

const Mentor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const handleChatClick = () => {
    if (mockMentor.isUnlocked) {
      navigate(`/chat/${id}`);
    } else {
      setShowPayment(true);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    navigate(`/chat/${id}`);
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
            <X className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mentor Profile */}
      <div className="px-4 py-6">
        {/* Basic Info */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-2xl">
            {mockMentor.avatar}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 bg-primary/10 text-primary rounded caption">
                {mockMentor.education}
              </span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded caption">
                {mockMentor.level}
              </span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded caption">
                {mockMentor.position}
              </span>
            </div>
          </div>
        </div>

        {/* Career Milestones */}
        <div className="ai-card mb-6">
          <h3 className="title-m mb-4">职业里程碑</h3>
          <div className="space-y-4">
            {mockMentor.milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  {index < mockMentor.milestones.length - 1 && (
                    <div className="w-0.5 h-8 bg-border mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <div className="caption text-caption mb-1">{milestone.year}</div>
                  <div className="body-m font-medium text-title mb-1">{milestone.title}</div>
                  <div className="body-m text-caption">{milestone.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wisdom Source */}
        <div className="ai-card mb-6">
          <h3 className="title-m mb-3">智慧来源</h3>
          <p className="body-m text-body leading-relaxed">
            {mockMentor.description}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
        <Button 
          variant="cta" 
          className="w-full"
          onClick={handleChatClick}
        >
          {mockMentor.isUnlocked 
            ? "继续与TA对话" 
            : "与TA的数字分身对话 (¥9.9)"
          }
        </Button>
      </div>

      {/* Payment Sheet */}
      {showPayment && (
        <PaymentSheet
          mentor={mockMentor}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default Mentor;