import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { TGraph, TTransactionRequest } from "../schemas/Transactions";
import { useAuth } from "../hooks/useAuth";

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionsProvider {
  graphs:
    | {
        id: number;
        avg_graph: {
          id: number;
          status: string;
          time: string;
          avg_graph: number;
          total_count: number;
          avg: number;
        }[];
        is_base: boolean;
        date_start?: Date | undefined;
        date_finish?: Date | undefined;
      }[]
    | undefined;
  transactions:
    | {
        time: string;
        status: string;
        count: number;
        date?: string | undefined;
      }[]
    | undefined;
  setTransactions: React.Dispatch<
    React.SetStateAction<
      | {
          time: string;
          status: string;
          count: number;
          date?: string | undefined;
        }[]
      | undefined
    >
  >;
  setTransactionsResponse: React.Dispatch<
    React.SetStateAction<object[] | undefined>
  >;
  transactionsResponse: object[] | undefined;
  getGraphs: () => Promise<void>;
  createTransactions: (data: TTransactionRequest[]) => Promise<void>;
  createGraphs: (data: TGraph) => Promise<void>;
  deleteGraphs: (graphId: number) => Promise<void>;
}

export const TransactionsContext = createContext({} as ITransactionsProvider);

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<
    TTransactionRequest[] | undefined
  >();
  const [transactionsResponse, setTransactionsResponse] = useState<object[]>();
  const [graphs, setGraphs] = useState<TGraph[] | undefined>();
  const { loading, setLoading } = useAuth();
  const getGraphs = async () => {
    try {
      const response = await api.get(`graphs/`);

      setGraphs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTransactions = async (data: TTransactionRequest[]) => {
    try {
      setLoading(true);
      const response = await api.post(`transactions/`, data);
      console.log(response.data);
      setTransactionsResponse(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createGraphs = async (data: TGraph) => {
    try {
      setGraphs([]);
      const response = await api.post(`graphs/`, data);

      setGraphs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGraphs = async (graphId: number) => {
    try {
      await api.delete(`graphs/${graphId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        createGraphs,
        createTransactions,
        deleteGraphs,
        getGraphs,
        graphs,
        transactions,
        setTransactions,
        setTransactionsResponse,
        transactionsResponse,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
