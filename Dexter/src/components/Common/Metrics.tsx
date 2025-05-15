import React from "react";
import like from "@/assets/like.svg";
import dislike from "@/assets/dislike.svg";
import { CiCircleQuestion } from "react-icons/ci";

interface MetricProps {
  value: number;
  max: number;
  label?: string;
  textColor?: string;
  ringFill?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

interface MetricsProps {
  metric: MetricProps;
  className?: string;
  marginTop?: string;
  spanColor?: string;
  otherClasses?: string;
}

const Metrics: React.FC<MetricsProps> = ({
  metric,
  className,
  marginTop,
  spanColor,
  otherClasses,
}) => {
  const circumference = 2 * Math.PI * 8;

  const getStrokeClass = (value: number, max: number): string => {
    if (value === 0) return "stroke-red-500";
    const percentage = (value / max) * 100;
    if (percentage < 50) return "stroke-red-500";
    if (percentage === 50) return "stroke-yellow-500";
    return "stroke-green-500";
  };

  const strokeClass = getStrokeClass(metric.value, metric.max);

  const getDynamicIcon = (): string | null => {
    if (metric.value === 0) return dislike;
    const percentage = (metric.value / metric.max) * 100;
    if (percentage < 50) return dislike;
    if (percentage >= 50) return like;
    return null;
  };

  return (
    <div className={`${otherClasses} flex items-start gap-1`}>
      {/* Circular Progress */}
      <div className={`relative ${marginTop}`}>
        <svg width={20} height={20} className="size-12" viewBox="0 0 20 20">
          <circle
            style={{ stroke: "lightgray" }}
            cx={10}
            cy={10}
            r={8}
            fill={metric.ringFill || "none"}
            strokeWidth={2}
          />
          <circle
            className={strokeClass}
            cx={10}
            cy={10}
            r={8}
            fill="none"
            strokeWidth={2}
            strokeDasharray={circumference}
            transform="rotate(-90 10 10)"
            strokeDashoffset={
              metric.value === 0
                ? circumference
                : circumference - (metric.value / metric.max) * circumference ||
                  0
            }
          />
        </svg>

        {/* Icon or Image */}
        <div className="absolute inset-0 flex items-center justify-center w-full h-full">
          {metric.imageSrc ? (
            <img
              src={metric.imageSrc}
              alt="Metric Image"
              className="absolute transition-transform left-1/2 top-1/2 max-h-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[40%]"
            />
          ) : getDynamicIcon() ? (
            <img
              src={getDynamicIcon() as string}
              alt="Metric Icon"
              className="absolute transition-transform left-1/2 top-1/2 max-h-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[40%]"
            />
          ) : (
            <div className={className}>{metric.icon}</div>
          )}
        </div>
      </div>

      {/* Metric Details */}
      <div
        className={`${
          metric.label === "Dexter's Visibility Score" ? "hidden" : "flex"
        } flex-col mt-4`}
      >
        <div className={metric.textColor}>
          <span className="text-xl">{metric.value}</span>/
          <span className={`${spanColor || metric.textColor} text-sm`}>
            {metric.max}
          </span>
        </div>
        <div
          className={`${spanColor || metric.textColor} flex items-center gap-2`}
        >
          <p className="text-[10px] whitespace-nowrap">
            {metric.label?.replace(/\s*Score$/, "")}
          </p>
          <CiCircleQuestion className="cursor-pointer text-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default Metrics;
