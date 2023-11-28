import { ReactNode, createContext, useEffect, useState } from "react";
import { TLogin } from "../schemas/loginValidator";
import { api } from "../services/api";
import { useNavigate } from "react-router";
import { TUserResponse } from "../schemas/userValidator";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProvider {
  signIn: (data: TLogin) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => Promise<void>;
  user: TUserResponse | undefined;
  setUser: React.Dispatch<
    React.SetStateAction<
      | {
          id: number;
          name: string;
          username: string;
          email: string;
        }
      | undefined
    >
  >;
}

interface ILoginResponse {
  access: string;
  user_id: number;
}

export const AuthContext = createContext({} as IAuthProvider);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<TUserResponse>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("monitoring-system:token");

    if (!token) {
      return;
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: TLogin) => {
    try {
      const response = await api.post<ILoginResponse>("users/login/", data);
      console.log(response.data);
      const { access, user_id } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${access}`;
      localStorage.setItem("monitoring-system:token", access);
      localStorage.setItem("monitoring-system:userId", String(user_id));
      setLoading(false);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem("monitoring-system:token");
    localStorage.removeItem("monitoring-system:userId");
    setUser(undefined);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ signIn, loading, setLoading, logout, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
