import PropTypes from 'prop-types';
import { CiCircleQuestion } from 'react-icons/ci';

const Metrics = ({ metric, className, marginTop, spanColor, otherClasses }) => {
  const circumference = 2 * Math.PI * metric.radius;

  const getStrokeClass = (value, max) => {
    const percentage = (value / max) * 100;
    if (percentage < 50) return 'stroke-red-500';
    if (percentage < 75) return 'stroke-yellow-500';
    return 'stroke-green-500';
  };

  const formatValue = (value) => (value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value);

  return (
    <div className={`${otherClasses} flex items-start gap-3`}>
      {/* Circular Progress */}
      <div className={`relative ${marginTop}`}>
        <svg
           width={metric.radius * 2 + metric.strokeWidth * 2}
           height={metric.radius * 2 + metric.strokeWidth * 2}
          className={metric.ringSize}
          viewBox={`0 0 ${metric.radius * 2 + metric.strokeWidth * 2} ${metric.radius * 2 + metric.strokeWidth * 2}`}
        >
          {/* Background Circle */}
          <circle
            style={{ stroke: 'lightgray' }}
            cx={metric.radius + metric.strokeWidth}
            cy={metric.radius + metric.strokeWidth}
            r={metric.radius}
            fill={metric.ringFill || 'none'}
            strokeWidth={metric.strokeWidth}
          />
          {/* Progress Circle */}
          <circle
            className={getStrokeClass(metric.value, metric.max)}
            cx={metric.radius + metric.strokeWidth}
            cy={metric.radius + metric.strokeWidth}
            r={metric.radius}
            fill="none"
            strokeWidth={metric.strokeWidth}
            strokeDasharray={circumference}
            transform={`rotate(-90 ${metric.radius + metric.strokeWidth} ${metric.radius + metric.strokeWidth})`}
            strokeDashoffset={
              circumference - (metric.value / metric.max) * circumference || 0
            }
          />
        </svg>
        
  <div className="absolute inset-0 left-0 flex items-center justify-center w-full h-full ">
    {metric.imageSrc ? (
      <img
        src={metric.imageSrc}
        alt='Metric Image'
        className="max-w-[40%] max-h-[40%] object-contain "
      />
    ) : (
      <div className={className}>{metric.icon}</div>
    )}
  </div>
</div>
     

      {/* Metric Details */}
      <div className={`${metric.label === "Dexter's Visibility Score" ? 'hidden' : 'flex'} flex-col mt-4`}>
        <div className={metric.textColor}>
          <span className="text-3xl">{formatValue(metric.value)}</span>/
          <span className={`${spanColor || metric.textColor} text-sm`}>{formatValue(metric.max)}</span>
        </div>
        <div className={`${spanColor || metric.textColor} flex items-center gap-2 max-md:gap-1 text-[10px]`}>
          <p>{metric.label.replace(/\s*Score$/, '')}</p>
          <CiCircleQuestion className="cursor-pointer text-[15px]" />
        </div>
      </div>
    </div>
  );
};

Metrics.propTypes = {
  metric: PropTypes.shape({
    radius: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    strokeColor: PropTypes.string.isRequired,
    ringSize: PropTypes.string,
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    label: PropTypes.string,
    textColor: PropTypes.string,
    ringFill: PropTypes.string,
    icon: PropTypes.node,
    imageSrc: PropTypes.node,
  }).isRequired,
  className: PropTypes.string,
  marginTop: PropTypes.string,
  spanColor: PropTypes.string,
  otherClasses: PropTypes.string,
};

export default Metrics