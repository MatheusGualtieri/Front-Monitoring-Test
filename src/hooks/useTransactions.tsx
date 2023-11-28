import { useContext } from "react";
import { TransactionsContext } from "../providers/TransactionsProvider";

export const useTransactions = () => {
  const transactionsContext = useContext(TransactionsContext);
  return transactionsContext;
};
