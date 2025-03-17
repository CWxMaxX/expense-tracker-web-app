import { Grid2, Typography } from "@mui/material";
import React from "react";
import Card from "../atoms/Card";
import { convertToLocaleString } from "../../helpers/dateTimeConvertionHelpers";

interface TransactionCardProps {
  index: number;
  title: string;
  category: string;
  date: string;
  notes?: string;
  amount: number;
  tranType: "income" | "expense";
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  index,
  title,
  category,
  date,
  notes,
  amount,
  tranType
}) => {
  return (
    <Grid2 size={12} key={index}>
      <Card>
        <div className="flex w-full flex-row items-start">
          <Grid2 container className="w-full" spacing={0}>
            <Grid2 size={{xs:8, sm:4}} order={1} >
              <Typography
                className="flex justify-start text-left"
                fontWeight={600}
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                className="flex justify-start text-left opacity-70"
                variant="caption"
                fontWeight={200}
              >
                {category}
              </Typography>
            </Grid2>
            <Grid2 className="flex flex-col items-end" size={4} order={{ xs: 2, sm: 3 }}>
              <Typography variant="h6" fontWeight={600} color={tranType === "income" ? "#4062ff" : "error"}>
                $ {convertToLocaleString(amount)}
              </Typography>
              <Typography variant="caption">{date}</Typography>
            </Grid2>
            <Grid2 size={{xs:12, sm:4}} order={{ xs: 3, sm: 2 }}>
              {notes && (
                <Typography
                  className="flex justify-start text-left opacity-70"
                  variant="caption"
                  fontWeight={200}
                >
                  {notes}
                </Typography>
              )}
            </Grid2>
          </Grid2>
        </div>
      </Card>
    </Grid2>
  );
};

export default TransactionCard;
