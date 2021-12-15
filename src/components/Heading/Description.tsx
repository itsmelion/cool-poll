import { FormHelperText } from '@habtic/input';

export const Description: React.FC<{ title?: string | null }> = ({ title }) => {
  if (!title) return null;
  return <FormHelperText>{title}</FormHelperText>;
};
