import { ColorMode } from '@habtic/system';
import { useFormContext } from 'react-hook-form';

import { usePoll } from '../../services';
import { StaggerContainer, StaggerItem } from '../Stagger';
import { Wrapper, Checkbox } from './Item.styles.web';

export function Check(): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();
  const borderColor = ColorMode.useDarkValue('rgba(0, 0, 0, 0.06)', 'rgba(255, 255, 255, 0.24)');

  return (
    <StaggerContainer>
      <Wrapper alignItems="start" justify="stretch">
        {properties?.choices?.map(({ id, label }) => (
          <StaggerItem key={`${activeQuestion}_${id}`}>
            <Checkbox
              borderColor={borderColor}
              value={id}
              {...register(activeQuestion, {
                required:
                    currentQuestion.validations?.required && "Can't skip this one",
              })}>
              {label}
            </Checkbox>
          </StaggerItem>
        ))}
      </Wrapper>
    </StaggerContainer>
  );
}
