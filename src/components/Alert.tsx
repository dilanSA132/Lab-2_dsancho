import React from 'react';

interface AlertProps {
  type: string;
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  let borderColor, bgColor, textColor;

  switch (type) {
    case 'info':
      bgColor = 'border-gray-300';
      borderColor = 'border-purple-300';
      textColor = 'text-purple-800';
      break;
    case 'danger':
      borderColor = 'border-red-300';
      bgColor = 'bg-red-50';
      textColor = 'text-red-800';
      break;
    case 'success':
      borderColor = 'border-green-300';
      bgColor = 'bg-green-50';
      textColor = 'text-green-800';
      break;
    case 'warning':
      borderColor = 'border-yellow-300';
      bgColor = 'bg-yellow-50';
      textColor = 'text-yellow-800';
      break;
    case 'dark':
      borderColor = 'border-gray-300';
      bgColor = 'bg-gray-50';
      textColor = 'text-gray-800';
      break;
    default:
      borderColor = 'border-gray-300';
      bgColor = 'bg-gray-50';
      textColor = 'text-gray-800';
      break;
  }
  return (
    <div className={`flex items-center p-4 mb-6 text-sm border rounded-lg ${borderColor} ${bgColor} ${textColor}`}>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} alert!</span> {message}
      </div>
    </div>
  );
};

export default Alert;
