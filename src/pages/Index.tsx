import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Design System Preview */}
        <div className="ai-card mb-6">
          <h1 className="title-l mb-3">AI虚拟前辈 设计系统</h1>
          <p className="body-l mb-4">
            根据您提供的设计规范，我已经完成了设计系统的配置。以下是按钮组件的预览：
          </p>
          
          <div className="space-y-3">
            <div>
              <p className="caption mb-2">主按钮 (智慧蓝)</p>
              <Button variant="default">立即体验</Button>
            </div>
            
            <div>
              <p className="caption mb-2">行动按钮 (活力橙)</p>
              <Button variant="cta">付费解锁</Button>
            </div>
            
            <div>
              <p className="caption mb-2">次要按钮 (灰色线框)</p>
              <Button variant="secondary">取消</Button>
            </div>
            
            <div>
              <p className="caption mb-2">文本按钮</p>
              <Button variant="ghost">了解更多</Button>
            </div>
          </div>
        </div>

        {/* Typography Preview */}
        <div className="ai-card mb-6">
          <h2 className="title-l mb-3">字体层级预览</h2>
          <div className="space-y-3">
            <div>
              <p className="title-l">大标题 Title L (20px, 加粗)</p>
            </div>
            <div>
              <p className="title-m">列表标题 Title M (18px, 加粗)</p>
            </div>
            <div>
              <p className="body-l">正文 Body L (16px, 常规) - 用于大段文章、对话内容</p>
            </div>
            <div>
              <p className="body-m">辅助正文 Body M (14px, 常规) - 用于简介、次要描述</p>
            </div>
            <div>
              <p className="caption">说明文字 Caption (12px, 常规) - 用于标签、时间戳</p>
            </div>
          </div>
        </div>

        {/* Chat Bubble Preview */}
        <div className="ai-card">
          <h2 className="title-l mb-3">对话气泡预览</h2>
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="chat-bubble-user body-l">
                这是用户发送的消息
              </div>
            </div>
            <div className="flex justify-start">
              <div className="chat-bubble-ai body-l">
                这是AI前辈的回复消息
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
