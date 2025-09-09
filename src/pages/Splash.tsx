import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const phases = [
      () => setAnimationPhase(1), // Slogan appears
      () => setAnimationPhase(2), // Logo appears
      () => setAnimationPhase(3), // Benefits appear
      () => setAnimationPhase(4), // Hold
      () => navigate("/home")     // Navigate to home
    ];

    const timeouts = [500, 1500, 2500, 4000, 5000];
    
    const timers = timeouts.map((delay, index) => 
      setTimeout(phases[index], delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {/* Slogan */}
      <div className={`text-center mb-8 transition-normal ${
        animationPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <h1 className="title-l text-primary mb-6">一次链接，看见新的未来</h1>
      </div>

      {/* Logo Placeholder */}
      <div className={`mb-12 transition-normal ${
        animationPhase >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center">
          <span className="text-primary-foreground font-semibold text-lg">AI</span>
        </div>
      </div>

      {/* Benefits */}
      <div className={`space-y-4 text-center transition-normal ${
        animationPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <div className="body-l text-body">
          · 与顶尖前辈"真人"对话
        </div>
        <div className="body-l text-body">
          · 探索职业的万种可能
        </div>
        <div className="body-l text-body">
          · 获得专属的成长路线
        </div>
      </div>
    </div>
  );
};

export default Splash;