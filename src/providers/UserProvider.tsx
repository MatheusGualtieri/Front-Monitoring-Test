import { ReactNode, createContext } from "react";
import { api } from "../services/api";
import { TUserRequest, TUserUpdate } from "../schemas/userValidator";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserProvider {
  getUser: () => Promise<void>;
  createUser: (data: TUserRequest) => Promise<void>;
  updateUser: (data: TUserUpdate) => Promise<void>;
  deleteUser: () => Promise<void>;
}

export const UserContext = createContext({} as IUserProvider);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const { user, setUser } = useAuth();
  const userId: number = user
    ? user.id
    : Number(localStorage.getItem("monitoring-system:userId"));

  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await api.get(`users/${userId}/`);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = async (data: TUserRequest) => {
    try {
      const newUser = { ...data, is_superuser: true };
      console.log(data);
      api.defaults.headers.common["Authorization"];
      const response = await api.post(`users/`, newUser);
      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (data: TUserUpdate) => {
    try {
      let newUser = {};
      if (data.password == "") {
        delete data.password;
      }
      newUser = { ...data };

      newUser = data;
      const response = await api.patch(`users/${userId}/`, newUser);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`users/${userId}/`);
      setUser(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ getUser, createUser, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
