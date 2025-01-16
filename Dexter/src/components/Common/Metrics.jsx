import React from 'react'
import { CiCircleQuestion } from 'react-icons/ci';

const Metrics = ({metric, className, marginTop, spanColor, otherClasses}) => {
    const circumference  = 2 * Math.PI * metric?.radius;
      
  return (

    <div className={` ${otherClasses} flex items-start gap-3`}>
           <div className={`relative ${marginTop}`}>
               <svg
                          className={metric.ringSize}
                          viewBox={`0 0 ${
                            metric.radius * 2 +  metric.strokeWidth * 2
                          } ${  metric.radius * 2 + metric.strokeWidth * 2}`}
                        >
                          {/* Background Circle */}
                          <circle
                            className={`stroke-${metric.strokeColor}`}
                            cx={metric.radius + metric.strokeWidth}
                            cy={metric.radius + metric.strokeWidth}
                            r={  metric.radius}
                             fill={metric.ringFill ? metric.ringFill : "none"}
                            strokeWidth={metric.strokeWidth}
                            stroke="lightgray"
                          />
                          {/* Progress Circle */}
                          <circle
                            className={`${
                              (  metric.value /   metric.max) * 100 < 50
                                ? "stroke-red-500"
                                : (  metric.value /   metric.max) * 100 < 75
                                ? "stroke-yellow-500"
                                : "stroke-green-500"
                            } `}
                            cx={metric.radius + metric.strokeWidth}
                            cy={metric.radius + metric.strokeWidth}
                            r={metric.radius}
                            fill="none"
                            strokeWidth={metric.strokeWidth}
                            strokeDasharray={circumference}
                            transform={`rotate(-90 ${
                              metric.radius + metric.strokeWidth
                            } ${metric.radius + metric.strokeWidth})`}
                            strokeDashoffset={
                             (   circumference -
                              ((metric.value / metric.max) * circumference) )|| 0
                            }
                          />
                        </svg>
                        <div className={className}>
                          {metric.icon}
                        </div>
           </div>
  
              <div className={`${metric.label === "Dexter's Visibility Score" ? "hidden" : "flex"} flex-col mt-4` }>
                <div className={metric.textColor}>
                  <span className="text-3xl ">{metric.value >= 1000 ? `${(metric.value / 1000).toFixed(1)}k` : metric.value}</span>
                  /<span className={`${spanColor || metric.textColor} text-sm`}>{metric.max >= 1000 ? `${(metric.max / 1000).toFixed(1)}k` : metric.max}</span>
                </div>
                <div className={`${spanColor || metric.textColor} flex items-center gap-2 max-md:gap-1 text-[10px] `}>
                  <p>{metric.label.replace(/\s*Score$/, "")}</p>
                  <CiCircleQuestion className="cursor-pointer text-[15px]" />
                </div>
         
            </div>
    </div>
  )
}

export default Metrics