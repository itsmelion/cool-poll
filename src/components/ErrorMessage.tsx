import { FormErrorMessage } from "@chakra-ui/react";
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";
import type { FieldErrors, MultipleFieldErrors, Message } from "react-hook-form";

type Props = {
  name: string;
  errors?: FieldErrors;
  message?: Message;
};

interface ErrorObj {
  message: Message;
  messages?: MultipleFieldErrors;
}

export function ErrorMessage(props: Props): JSX.Element {
  return (
    <HookFormErrorMessage
      {...props}
      render={({ messages, message }: ErrorObj) =>
        messages ? (
          Object.entries(messages).map(([type, m]) => (
            <FormErrorMessage key={type} mx="0.75em" role="alert">
              {m}
            </FormErrorMessage>
          ))
        ) : (
          <FormErrorMessage mx="0.75em" role="alert">
            {message}
          </FormErrorMessage>
        )
      }
    />
  );
}
