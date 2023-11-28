import { TUserRequest, userSchemaRequest } from "../../schemas/userValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import { InputMain } from "../../styles/Inputs";
import { ButtonBrand } from "../../styles/Buttons";
import { SignupContainer, StyledSignupForm, StyledSignupPage } from "./style";
import { StyledError, StyledH1 } from "../../styles/Fonts";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserRequest>({
    resolver: zodResolver(userSchemaRequest),
  });

  const { createUser } = useUser();

  const navigate = useNavigate();

  const submit: SubmitHandler<TUserRequest> = async (data) => {
    createUser(data);
  };

  return (
    <>
      <StyledSignupPage>
        <SignupContainer>
          <StyledH1>Create Account</StyledH1>
          <StyledSignupForm onSubmit={handleSubmit(submit)}>
            <label htmlFor="username">Username</label>
            <InputMain type="text" id="username" {...register("username")} />
            <StyledError>{errors.username?.message}</StyledError>

            <label htmlFor="name">full name*</label>
            <InputMain type="text" id="name" {...register("name")} />
            <StyledError>{errors.name?.message}</StyledError>

            <label htmlFor="email">email*</label>
            <InputMain type="text" id="email_login" {...register("email")} />
            <StyledError>{errors.email?.message}</StyledError>

            <label htmlFor="password">password*</label>
            <InputMain
              type="password"
              id="password"
              {...register("password")}
            />
            <StyledError>{errors.password?.message}</StyledError>

            <ButtonBrand type="submit">Confirm</ButtonBrand>
          </StyledSignupForm>
          <ButtonBrand type="button" onClick={() => navigate("/")}>
            Go back to Login
          </ButtonBrand>
        </SignupContainer>
      </StyledSignupPage>
    </>
  );
};
