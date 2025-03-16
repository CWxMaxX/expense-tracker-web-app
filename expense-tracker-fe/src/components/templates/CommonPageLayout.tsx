import React from "react";
import Header from "../organisms/Header";
import Container from "../organisms/Container";

interface CommonPageLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const CommonPageLayout: React.FC<CommonPageLayoutProps> = ({
  pageTitle,
  children,
}) => {
  return (
    <div className="flex flex-col items-center h-screen p-0">
      <Header title={pageTitle} />
      <Container>{children}</Container>
    </div>
  );
};

export default CommonPageLayout;
