import { ColorMode } from '@habtic/system';
import { useEffect, useState } from 'react';

import bgDark from './backdrop-dark.jpg';
import bgLight from './backdrop-light.jpg';
import { Backdrop, Main } from './PageContainer.styled.web';

interface ComponentType extends React.ComponentPropsWithoutRef<'main'> {
  wrapper?: boolean;
}

export const PageContainer = ({ wrapper, ...props }: ComponentType): JSX.Element => {
  const bgColor = ColorMode.useDarkValue('#ef9aff', '#220552');
  const src = ColorMode.useDarkValue(bgLight, bgDark);
  const [bgImage, setBgReady] = useState<string>();

  /* delayed/async load BG image */
  useEffect(() => {
    const bgImg = new Image();
    bgImg.src = src;
    bgImg.onload = () => setTimeout(() => setBgReady(`url(${src})`), 50);
  }, [src]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!wrapper) return <>{props.children}</>;

  return (
    <Backdrop bgColor={bgColor} bgImage={bgImage}>
      <Main className="quiz-main-wrapper" {...props} />
    </Backdrop>
  );
};
