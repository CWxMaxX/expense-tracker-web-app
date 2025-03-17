import React from "react";
import CommonPageLayout from "../templates/CommonPageLayout";
import StatCard from "../organisms/StatCard";
import TransactionsList from "../organisms/TransactionsList";
import FloatingActionButton from "../atoms/FloatingActionButton";

const TransactionsPage: React.FC = () => {
  return (
    <CommonPageLayout pageTitle="Transactions">
      <StatCard totalBalance={1000} income={500} expense={500} />
      <TransactionsList/>
      <FloatingActionButton/>
    </CommonPageLayout>
  );
};

export default TransactionsPage;
