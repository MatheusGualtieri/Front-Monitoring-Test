import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Header } from "../../components/Header";
import { ModalEditProfile } from "../../components/ModalEditProfile";
import { StyledContainer, StyledMain } from "./style";
import { CSVReader } from "../../components/CSVReader";
import { Graph } from "../../components/Graph";
export const Dashboard = () => {
  const { getUser } = useUser();
  const [isOpenModalEditProfile, setIsOpenModalEditProfile] = useState(false);

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  const toggleModalProfile = () => {
    setIsOpenModalEditProfile(!isOpenModalEditProfile);
  };

  return (
    <>
      <Header toggleModal={toggleModalProfile} />
      <StyledMain>
        <StyledContainer>
          <label htmlFor="csvInput" style={{ display: "block" }}>
            Enter CSV File
          </label>
          <CSVReader></CSVReader>
          <Graph></Graph>
        </StyledContainer>
      </StyledMain>

      {isOpenModalEditProfile && (
        <ModalEditProfile toggleModal={toggleModalProfile}></ModalEditProfile>
      )}
    </>
  );
};
