import React from "react";
import Card from "../atoms/Card";
import { Grid2 } from "@mui/material";
import IncomeIcon from "../../assets/icons/ic_income.png";
import ExpenseIcon from "../../assets/icons/ic_expense.png";
import TotalIcon from "../../assets/icons/ic_total.png";
import StatCardAmountElement from "../molecules/StatCardAmountElement";
import CustomDateRangePicker from "../molecules/CustomDateRangePicker";

interface StatCardProps {
  totalBalance: number;
  income: number;
  expense: number;
}

const StatCard: React.FC<StatCardProps> = ({
  totalBalance,
  income,
  expense,
}) => {
  return (
    <Card>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, sm: 3 }} order={1}>
          <StatCardAmountElement
            amount={totalBalance}
            icon={TotalIcon}
            title="Total Balance"
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }} order={{ xs: 2, sm: 4 }} className="flex justify-end justify-end">
            <CustomDateRangePicker />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }} order={{ xs: 3, sm: 2 }}>
          <StatCardAmountElement
            amount={income}
            icon={IncomeIcon}
            title="Income"
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3 }} order={{ xs: 4, sm: 3 }}>
          <StatCardAmountElement
            amount={expense}
            icon={ExpenseIcon}
            title="Expense"
          />
        </Grid2>
      </Grid2>
    </Card>
  );
};

export default StatCard;
