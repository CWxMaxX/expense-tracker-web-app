import React from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { categoryOptions } from "../molecules/FilterSection";
import { createTransaction } from "../../api/transactions";

const TransactionSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be positive"),
  date: Yup.date().required("Date is required"),
  category: Yup.string().required("Category is required"),
  notes: Yup.string(),
});

const CreateEditTranPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-[500px] p-4">
      <h1 className="text-2xl font-bold mb-4">Create Transaction</h1>
      <Formik
        initialValues={{
          title: "",
          amount: 0,
          date: "",
          category: "",
          notes: "",
          tranType: "expense" as "expense" | "income",
        }}
        validationSchema={TransactionSchema}
        onSubmit={(values) => {
          createTransaction(values)
            .then((response) => {
              console.log("Transaction created successfully:", response);
              window.location.assign("/transactions");
            })
            .catch((error) => {
              console.error("Error creating transaction:", error);
            });
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <Field
                as={TextField}
                name="tranType"
                label="Type"
                select
                fullWidth
                error={touched.tranType && !!errors.tranType}
                helperText={touched.tranType && errors.tranType}
                className='text-left'
              >
                <MenuItem value="expense">Expense</MenuItem>
                <MenuItem value="income">Income</MenuItem>
              </Field>
            </div>
            <div>
              <Field
                as={TextField}
                name="title"
                label="Title"
                fullWidth
                error={touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="amount"
                label="Amount"
                type="number"
                fullWidth
                error={touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="date"
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                error={touched.date && !!errors.date}
                helperText={touched.date && errors.date}
              />
            </div>
            <div>
              <Field
                as={TextField}
                name="category"
                label="Category"
                select
                fullWidth
                error={touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                className='text-left'
              >
                {categoryOptions.map((category) => (
                  <MenuItem key={category.value} value={category.value}>
                    {category.label}
                  </MenuItem>
                ))}
              </Field>
            </div>
            <div>
              <Field
                as={TextField}
                name="notes"
                label="Notes"
                fullWidth
                multiline
                rows={4}
                error={touched.notes && !!errors.notes}
                helperText={touched.notes && errors.notes}
              />
            </div>
            <div className="w-full flex flex-row justify-between">
              <Button
                type="submit"
                className="w-[180px]"
                variant="contained"
                color="primary"
              >
                Save
              </Button>
              <Button
                type="reset"
                variant="contained"
                color="error"
                className="w-[180px]"
                onClick={() => {
                  window.location.assign("/transactions");
                }}
              >
                Back
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateEditTranPage;
