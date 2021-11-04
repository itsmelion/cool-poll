import { TextareaProps } from '@chakra-ui/react';

import type { QuestionFieldProps } from './QuestionField.types';

import { TextArea } from './Item.styles.web';

export function LongText({
  htmlProps,
  ...props
}: QuestionFieldProps<TextareaProps>): JSX.Element {
  return <TextArea {...htmlProps} {...props} />;
}
