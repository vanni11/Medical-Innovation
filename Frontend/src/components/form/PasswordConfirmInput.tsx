import styled from 'styled-components';

import { REGISTER_TYPE, ERROR_MESSAGE } from '@/constants';
import { RegisterForm, RegisterField } from '@/types';

export const PasswordConfirmInput = ({
  register,
  errorMessage,
  placeholder,
}: {
  register: RegisterForm;
  errorMessage: string | undefined | any;
  placeholder: string;
}) => {
  const validatePasswordConfirm = (input: string, values: RegisterField) => {
    const password = values[REGISTER_TYPE.PASSWORD];

    return input === password || ERROR_MESSAGE.CONFIRM_PASSWORD.NOT_MATCH;
  };

  return (
    <Input
      iserror={!!errorMessage}
      {...register(REGISTER_TYPE.CONFIRM_PASSWORD, {
        required: ERROR_MESSAGE.CONFIRM_PASSWORD.REQUIRED,
        validate: {
          match: validatePasswordConfirm,
        },
      })}
      type="password"
      placeholder={placeholder}
    />
  );
};

const Input = styled.input<{ iserror: boolean }>`
  padding: 15px;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  border: solid 2px ${(props) => (props.iserror ? props.theme.errorColor : props.theme.validColor)};
  transition: ${({ theme }) => theme.transitionOption};
  background: ${({ theme }) => theme.loginBackgroundColor};
  :focus {
    outline: none;
  }
`;
