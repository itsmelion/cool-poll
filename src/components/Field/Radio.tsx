import { Radio as RadioItem, RadioGroup } from '@chakra-ui/react';
import { ColorMode } from '@habtic/system';
import { useFormContext } from 'react-hook-form';

import { usePoll } from '../../services';
import { StaggerItem, StaggerContainer } from '../Stagger';
import { Wrapper } from './Item.styles.web';

export function Radio(): JSX.Element {
  const { activeQuestion, currentQuestion } = usePoll();
  const { properties } = currentQuestion;
  const { register } = useFormContext();
  const borderColor = ColorMode.useDarkValue('rgba(0, 0, 0, 0.16)', 'rgba(255, 255, 255, 0.24)');

  return (
    <RadioGroup>
      <StaggerContainer>
        <Wrapper>
          {properties?.choices?.map(({ id, label }) => (
            <StaggerItem key={`${activeQuestion}_${id}`}>
              <RadioItem
                borderColor={borderColor}
                value={id}
                width="full"
                {...register(activeQuestion, {
                  required:
                    currentQuestion.validations?.required && "Can't skip this one",
                })}>
                {label}
              </RadioItem>
            </StaggerItem>
          ))}
        </Wrapper>
      </StaggerContainer>
    </RadioGroup>
  );
}
