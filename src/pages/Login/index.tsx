import { SubmitHandler, useForm } from "react-hook-form";
import { TLogin, loginSchema } from "../../schemas/loginValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import {
  LoginContainer,
  LoginHeader,
  LoginSection,
  StyledLoginForm,
  StyledLoginPage,
} from "./style";
import { ButtonBrand } from "../../styles/Buttons";
import { InputMain } from "../../styles/Inputs";
import { StyledError, StyledH1, StyledH2 } from "../../styles/Fonts";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth();

  const submit: SubmitHandler<TLogin> = async (data) => {
    signIn(data);
  };

  const navigate = useNavigate();

  return (
    <>
      <StyledLoginPage>
        <LoginSection>
          <LoginHeader>
            <StyledH1>CloudWalk Monitoring System</StyledH1>
          </LoginHeader>
          <LoginContainer>
            <StyledH1>Welcome Back</StyledH1>
            <StyledLoginForm onSubmit={handleSubmit(submit)}>
              <label htmlFor="email">email</label>
              <InputMain type="text" id="email" {...register("email")} />

              <StyledError>{errors.email?.message}</StyledError>
              <label htmlFor="password">password</label>
              <InputMain
                type="password"
                id="password"
                {...register("password")}
              />
              <StyledError>{errors.password?.message}</StyledError>
              <ButtonBrand type="submit">Login</ButtonBrand>
            </StyledLoginForm>
            <StyledH2>Don't have an Accont?</StyledH2>
            <ButtonBrand type="button" onClick={() => navigate("/signup")}>
              Signup
            </ButtonBrand>
          </LoginContainer>
        </LoginSection>
      </StyledLoginPage>
    </>
  );
};
