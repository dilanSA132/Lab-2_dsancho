import React from 'react';

interface SmallPictureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SmallPicture: React.FC<SmallPictureProps> = ({ title, description, icon }) => {
  return (
    <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden border border-gray-300">
        <div className="">{icon}</div>
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <div className="mt-4">
        <h2 className="text-white-900 title-font text-lg font-medium">{title}</h2>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
};

export default SmallPicture;
