import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "../Modal";
import { useNavigate } from "react-router";
import { useUser } from "../../hooks/useUser";
import { TUserUpdate, userSchemaUpdate2 } from "../../schemas/userValidator";
import { useAuth } from "../../hooks/useAuth";
import { InputMain } from "../../styles/Inputs";
import { ButtonBrandSecondary, ButtonNegative } from "../../styles/Buttons";
import { HeaderModal } from "../HeaderModal";

interface IModalCreateContactProps {
  toggleModal: () => void;
}

export const ModalEditProfile = ({ toggleModal }: IModalCreateContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUserUpdate>({
    resolver: zodResolver(userSchemaUpdate2),
  });

  const { user } = useAuth();
  const { updateUser, deleteUser } = useUser();

  const navigate = useNavigate();

  const submit: SubmitHandler<TUserUpdate> = async (data) => {
    updateUser(data);
  };

  const submitDelete = async () => {
    deleteUser();
    navigate("/");
  };

  console.log(errors);

  return (
    <Modal toggleModal={toggleModal}>
      <HeaderModal toggleModal={toggleModal}>
        <h1>Edit Profile</h1>
      </HeaderModal>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="full-name">full name*</label>
        <InputMain
          type="text"
          id="full-name"
          defaultValue={user?.full_name}
          {...register("full_name")}
        />

        <label htmlFor="email_login">email*</label>
        <InputMain
          type="email"
          id="email_login"
          defaultValue={user?.email_login}
          {...register("email_login")}
        />

        <label htmlFor="email-2">email secondary</label>
        <InputMain
          type="email"
          id="email-2"
          defaultValue={user?.emails[0]}
          {...register("emails.0")}
        />

        <label htmlFor="phone">phone*</label>
        <InputMain
          type="number"
          id="phone"
          defaultValue={user?.phone[0]}
          {...register("phone.0")}
        />

        <label htmlFor="phone-2">phone secondary</label>
        <InputMain
          type="number"
          id="phone-2"
          defaultValue={user?.phone[1]}
          {...register("phone.1")}
        />

        <label htmlFor="password">password*</label>
        <InputMain type="password" id="password" {...register("password")} />

        <ButtonBrandSecondary type="submit">Confirm</ButtonBrandSecondary>
        <ButtonNegative type="button" onClick={submitDelete}>
          Delete
        </ButtonNegative>
      </form>
    </Modal>
  );
};
