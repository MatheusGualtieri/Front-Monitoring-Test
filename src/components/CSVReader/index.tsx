import { useCSVReader } from "react-papaparse";
import { useTransactions } from "../../hooks/useTransactions";
import { ButtonBrandSecondary } from "../../styles/Buttons";
export const CSVReader = () => {
  const { CSVReader } = useCSVReader();
  const { createTransactions, transactionsResponse, setTransactionsResponse } =
    useTransactions();

  const onFileUpload = async (data: [string[]]) => {
    const arrayData = [];
    const newDate = new Date();
    for (let i = 1; i < data.length - 1; i++) {
      let timeFormat = data[i][0];
      timeFormat = timeFormat.replace(" ", "").replace("h", ":");
      arrayData.push({
        date: `${newDate.getDay()}-${newDate.getMonth()}-${newDate.getFullYear()}`,
        time: timeFormat,
        status: data[i][1],
        count: parseInt(data[i][2]),
      });
    }
    createTransactions(arrayData);
  };

  return (
    <CSVReader
      onUploadAccepted={(results: any) => {
        setTransactionsResponse(undefined);
        onFileUpload(results.data);
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar }: any) => (
        <>
          <div>
            <ButtonBrandSecondary type="button" {...getRootProps()}>
              Browse file
            </ButtonBrandSecondary>
            <div>{acceptedFile && acceptedFile.name}</div>
          </div>
          <ProgressBar />
        </>
      )}
    </CSVReader>
  );
};
