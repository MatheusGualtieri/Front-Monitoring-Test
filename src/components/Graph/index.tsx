import { Chart } from "react-google-charts";
import { useTransactions } from "../../hooks/useTransactions";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Graph = () => {
  const { transactionsResponse } = useTransactions();
  const [data, setData] = useState<any[]>();
  const { loading } = useAuth();
  useEffect(() => {
    if (transactionsResponse != undefined) {
      const newGraph = organizingGraphData();
      setData(newGraph);
    }
  }, [transactionsResponse]);

  const organizingGraphData = () => {
    const graphData: any[] = [
      [
        "hour",
        "approved",
        "denied",
        "refunded",
        "reversed",
        "failed",
        "backend_reversed",
        "total_not_approved",
      ],
    ];
    for (const key in transactionsResponse) {
      const list_helper: any[] = [parseInt(key), 0, 0, 0, 0, 0, 0, 0];
      for (const k in transactionsResponse[key]) {
        let indice = 0;
        graphData[0].find((status, i) => {
          if (k == status) {
            indice = i;
          }
          if (indice != 0) {
            list_helper[indice] = transactionsResponse[key][k];
          }
        });
        graphData[parseInt(key) + 1] = list_helper;
      }
    }
    return graphData;
  };
  const options = {
    chart: {
      title: "Transactions Per Hour",
    },
  };
  return (
    <>
      {loading ? (
        <h1>Carregando</h1>
      ) : transactionsResponse ? (
        <Chart
          chartType="Bar"
          width={"100%"}
          height={"400px"}
          data={data}
          options={options}
        ></Chart>
      ) : null}
    </>
  );
};
