import { chakra } from '@chakra-ui/react';

export const Card = chakra('section', {
  baseStyle: {
    padding: '3em',
    borderRadius: '1.5em',
    minHeight: '280pt',
    minWw: '200pt',
    margin: 'auto',
    color: 'inherit',
    maxHeight: '100%',
    overflowY: 'auto',
    w: '100%',
  },
});

export const Center = chakra('section', {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
