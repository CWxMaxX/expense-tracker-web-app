import React, { useEffect, useState } from "react";
import { CircularProgress, Grid2 } from "@mui/material";
import TransactionCard from "../molecules/TransactionCard";
import FilterSection from "../molecules/FilterSection";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../api/transactions";

interface Transaction {
  title: string;
  amount: number;
  date: string;
  category: string;
  notes?: string;
  tranType: "income" | "expense";
}

const TransactionsList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [params, setParams] = useState<{
    page: number;
    pageSize: number;
    sortByDate: "newest" | "oldest";
  }>({
    page: 1,
    pageSize: 10,
    sortByDate: "newest",
  });
  const { data, error, isLoading } = useQuery({
    queryKey: ["transactions", params],
    queryFn: () =>
      getTransactions(params.page, params.pageSize, params.sortByDate),
  });

  useEffect(() => {
    if (data) {
      setTransactions(data.data);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="w-full h-300 flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  if (error) return <div>Error loading transactions</div>;

  const handleSortByChange = (value: "newest" | "oldest") => {
    setParams((prev) => ({ ...prev, sortByDate: value }));
  };

  return (
    <Grid2 className="mt-6" container spacing={2}>
      <FilterSection
        onFilterChangeChange={() => {}}
        onSortChange={handleSortByChange}
      />
      {transactions.map((transaction, index) => (
        <TransactionCard
          key={index}
          index={index}
          title={transaction.title}
          amount={transaction.amount}
          date={transaction.date}
          category={transaction.category}
          notes={transaction.notes}
          tranType={transaction.tranType}
        />
      ))}
    </Grid2>
  );
};

export default TransactionsList;
