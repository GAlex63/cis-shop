import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthFormError, Button, H2, Input } from "../../components";
import { useResetForm } from "../../hooks";
import { setUser, setCart } from "../../action";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constans/role";
import { AuthorizationContainer, FormWrapper, StyledLink, Title } from "./style";
import { request } from "../../utils/request";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускаются только буквы и цифры"
    )
    .min(3, "Неверно заполнен логин. Минимум 3 символа")
    .max(15, "Неверно заполнен логин. Максимум 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
    )
    .min(6, "Неверно заполнен пароль. Минимум 6 символов")
    .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
});

export const Authorization = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    request("/login", "POST", { login, password })
      .then(({ error, user }) => {
        if (error) {
          setServerError(`Ошибка запроса: ${error}`);
          return;
        }

        dispatch(setUser(user));
        sessionStorage.setItem("userData", JSON.stringify(user));
        Promise.all([
          // request(`/cart/${user.id}`, "GET"),
          request(`/cart`, "GET"),
        ])
        .then(([cartResponse]) => {
          if (cartResponse.error) {
            
            console.error(`Ошибка загрузки данных: ${cartResponse.error}`);
            return;
          }
          dispatch(setCart(cartResponse.cart));
          sessionStorage.setItem("cartData", JSON.stringify(cartResponse.cart));
        })
          .catch((fetchError) => {
            console.error(
              "Ошибка при загрузке данных корзины:",
              fetchError
            );
          });
      })
      .catch((authError) => {
        setServerError(`Ошибка авторизации: ${authError}`);
      });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }
  return (
    <AuthorizationContainer>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Авторизация</Title>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onChange: () => setServerError(null),
          })}
        />
        <Button type="submit" width="100%" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
        <StyledLink>
          <Link to="/register">Регистрация </Link>
        </StyledLink>
      </FormWrapper>
    </AuthorizationContainer>
  );
};
