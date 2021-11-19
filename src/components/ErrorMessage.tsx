import { FormErrorMessage } from '@chakra-ui/react';
import { ErrorMessage as HookFormErrorMessage } from '@hookform/error-message';

import type { FieldErrors } from 'react-hook-form';

type Props = {
  name: string;
  errors?: FieldErrors;
};

export function ErrorMessage(props: Props): JSX.Element {
  return (
    <HookFormErrorMessage
      {...props}
      render={({ messages, message }) => (messages ? (
        Object.entries(messages).map(([type, m]) => (
          <FormErrorMessage key={type} mx="0.75em" role="alert">
            {m}
          </FormErrorMessage>
        ))
      ) : (
        <FormErrorMessage mx="0.75em" role="alert">
          {message}
        </FormErrorMessage>
      ))}
    />
  );
}

ErrorMessage.defaultProps = {
  errors: {},
};
