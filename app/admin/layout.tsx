import Navigation from "@/components/Navigation/Navigation";
import React from "react";

type Props = {};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <Navigation />
      {children}
    </div>
  );
};

export default layout;
