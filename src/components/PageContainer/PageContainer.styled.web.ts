import { habtic } from '@habtic/styled';

export const Main = habtic('main', {
  baseStyle: {
    position: 'relative',
    maxWidth: '986pt',
    margin: '0 auto',
    height: '100%',
    width: '100%',
    color: 'current',
  },
});

export const Backdrop = habtic('div', {
  baseStyle: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    h: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
