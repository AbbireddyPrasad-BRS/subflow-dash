import React, { ReactNode } from "react";

interface BackgroundGradientAnimationProps {
  children: ReactNode;
}

export const BackgroundGradientAnimation: React.FC<BackgroundGradientAnimationProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-green-500 via-purple-500 to-indigo-500 bg-[length:400%_400%]"></div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Gradient Animation Styles */}
      <style >{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          animation: gradientShift 15s ease infinite;
        }
      `}</style>
    </div>
  );
};
