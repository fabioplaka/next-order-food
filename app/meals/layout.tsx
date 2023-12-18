import React from "react";

interface MealsLayoutProps {
  children: React.ReactNode;
}

const MealsLayout: React.FC<MealsLayoutProps> = ({ children }) => {
  return (
    <>
      <p>Meals layout</p>
      {children}
    </>
  );
};

export default MealsLayout;
