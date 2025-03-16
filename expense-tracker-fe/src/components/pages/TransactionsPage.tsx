import React from "react";
import CommonPageLayout from "../templates/CommonPageLayout";
import StatCard from "../organisms/StatCard";

const TransactionsPage: React.FC = () => {
  return (
    <CommonPageLayout pageTitle="Transactions">
      <StatCard totalBalance={1000} income={500} expense={500} />
    </CommonPageLayout>
  );
};

export default TransactionsPage;
