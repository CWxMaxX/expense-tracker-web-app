import axios from "axios";
const API_URL = "http://localhost:8080/api/transactions";

export interface Transaction {
  id?: string;
  title: string;
  category: string;
  date: string;
  notes?: string;
  amount: number;
  tranType: "income" | "expense";
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export const createTransaction = async (transaction: Transaction) => {
  try {
    const response = await axios.post<Transaction>(API_URL, transaction);
    return response.data;
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};

export const editTransaction = async (id: string, transaction: Transaction) => {
  try {
    const response = await axios.put<Transaction>(
      `${API_URL}/${id}`,
      transaction
    );
    return response.data;
  } catch (error) {
    console.error("Error editing transaction:", error);
    throw error;
  }
};

export const getTransactions = async (
  page: number,
  pageSize: number,
  sortByDate: "newest" | "oldest"
) => {
  try {
    const response = await axios.get<PaginatedResponse<Transaction>>(API_URL, {
      params: {
        page,
        pageSize,
        sortByDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

export const deleteTransaction = async (id: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};
