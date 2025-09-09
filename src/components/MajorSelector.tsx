import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const majors = [
  "计算机科学与技术",
  "软件工程", 
  "数据科学与大数据技术",
  "人工智能",
  "电子信息工程",
  "机械工程",
  "工商管理",
  "市场营销",
  "会计学",
  "金融学",
  "法学",
  "新闻传播学",
  "心理学",
  "教育学",
  "医学",
  "生物技术"
];

interface MajorSelectorProps {
  selectedMajor: string;
  onSelect: (major: string) => void;
  onClose: () => void;
}

export const MajorSelector = ({ selectedMajor, onSelect, onClose }: MajorSelectorProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-card w-full rounded-t-3xl max-h-[70vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="title-m">选择专业</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Majors Grid */}
        <div className="p-4 overflow-y-auto max-h-96">
          <div className="grid grid-cols-2 gap-3">
            {majors.map((major) => (
              <Button
                key={major}
                variant={selectedMajor === major ? "default" : "outline"}
                className="body-m h-auto py-3 px-4 justify-start"
                onClick={() => onSelect(major)}
              >
                {major}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};