import React from "react";

interface MealsLayoutProps {
  children: React.ReactNode;
}

const MealsLayout: React.FC<MealsLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default MealsLayout;
