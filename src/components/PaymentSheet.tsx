import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  company: string;
  education: string;
  level: string;
  position: string;
}

interface PaymentSheetProps {
  mentor: Mentor;
  onClose: () => void;
  onSuccess: () => void;
}

export const PaymentSheet = ({ mentor, onClose, onSuccess }: PaymentSheetProps) => {
  const handlePayment = () => {
    // Simulate payment success
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-background w-full rounded-t-3xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground">{mentor.avatar}</span>
              </div>
              <div>
                <div className="body-m font-medium">{mentor.name}</div>
                <div className="caption text-caption">{mentor.title}</div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Price Anchor */}
          <div className="text-center mb-6">
            <div className="title-l text-title mb-2">真人咨询价 799/小时</div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4 mb-6">
            {/* Single Mentor Option */}
            <div className="border-2 border-accent rounded-xl p-4 bg-accent/5">
              <div className="flex items-center justify-between mb-3">
                <div className="title-m">解锁单个导师</div>
                <div className="flex items-center gap-2">
                  <span className="body-l text-caption line-through">限时特惠</span>
                  <span className="title-m text-accent">9.9¥!</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="body-m text-body">· 与{mentor.name}无限对话</div>
                <div className="body-m text-body">· 24小时在线</div>
                <div className="body-m text-body">· 深度行业认知</div>
                <div className="body-m text-body">· 专属对话记忆，深度追踪你的成长</div>
              </div>

              <div className="ai-card bg-muted/50">
                <div className="caption text-caption">
                  @某大学学同学："9.9元解决了我几个月的迷茫，比知乎有效多了！"
                </div>
              </div>
            </div>

            {/* All Mentors Option */}
            <div className="border border-border rounded-xl p-4 bg-muted/30">
              <div className="flex items-center justify-between mb-3">
                <div className="title-m text-caption">解锁全部导师</div>
                <div className="flex items-center gap-2">
                  <span className="body-l text-caption">39.9¥</span>
                  <span className="body-l text-caption">39.9日元</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="body-m text-caption">· 与50+导师无限对话</div>
                <div className="body-m text-caption">· 24小时在线</div>
                <div className="body-m text-caption">· 无限时间和次数</div>
              </div>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="space-y-3">
            <Button 
              variant="cta" 
              className="w-full py-4"
              onClick={handlePayment}
            >
              立即付费 (9.9¥) (9.9日元)
            </Button>
            <Button 
              variant="outline" 
              className="w-full py-4"
              disabled
            >
              选择 (39.9¥)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};