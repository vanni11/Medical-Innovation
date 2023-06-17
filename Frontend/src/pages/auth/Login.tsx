import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { INPUT_TYPE, ROUTE, COOKIE } from '@/constants';
import { useForm } from 'react-hook-form';
import { login } from '@/api/auth';
import { ReactHookInput } from '@/components/form';
import { RegisterField } from '@/types';
import { getCookie, setCookie } from '@/libs/Cookie';

export const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getCookie(COOKIE.KEY.ACCESS_TOKEN);
    if (accessToken) {
      navigate(ROUTE.HOME);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterField>({
    mode: 'onChange',
  });

  const { mutate } = useMutation(login, {
    onSuccess: (res) => {
      setCookie(COOKIE.KEY.ACCESS_TOKEN, res.data.accessToken, {
        expires: new Date(Date.now() + COOKIE.EXPIRE.ACCESS_TOKEN),
      });
      navigate(ROUTE.HOME);
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onValid = async (userInput: RegisterField) => mutate(userInput);

  return (
    <>
    <Wrapper>
      <Container>
        <Title>로그인</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <ReactHookInput
              title="이메일"
              type={INPUT_TYPE.EMAIL}
              register={register}
              errorMessage={errors.email?.message}
              placeholder="이메일"
            />
            <ReactHookInput
              title="비밀번호"
              type={INPUT_TYPE.PASSWORD}
              register={register}
              errorMessage={errors.password?.message}
              placeholder="비밀번호"
            />
            <LoginWrapper>
              <Submit isvalid={!Object.keys(errors)[0]} disabled={isSubmitting}>
                로그인
              </Submit>
            </LoginWrapper>
            <Hr />
            <Text>계정이 없으신가요?</Text>
            <Link to={ROUTE.SIGN_UP}>회원가입</Link>
          </Form>
      </Container>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media screen and (max-width: 991px) {
    padding: 15;
    min-height: calc(100vh - 200px);
  }
  @media screen and (min-width: 992px) {
    min-height: calc(100vh - 400px);
  }
`;

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 30px 80px;
  width: 410px;
  padding: 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  border-left: none;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Submit = styled.button<{ isvalid: boolean }>`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background: ${(props) =>
    props.isvalid ? props.theme.pointColor : props.theme.loginDisabledColor};
  color: #ffffff;
  font-weight: 600;
  border: none;
  font-size: 20px;
  height: 50px;
  width: 100%;
  transition: ${({ theme }) => theme.transitionOption};
  :hover {
    cursor: pointer;
    background: ${(props) => (props.isvalid ? props.theme.pointColorLight : '')};
    color: ${({ theme }) => theme.background};
  }
  letter-spacing: 1px;
`;

const Hr = styled.div`
  border-bottom: solid 1px rgba(122, 122, 122, 0.5);
  margin: 25px 0 15px 0;
  width: 100%;
`;

const Text = styled.div`
  text-align: center;
  color: rgba(122, 122, 122, 0.8);
`;
