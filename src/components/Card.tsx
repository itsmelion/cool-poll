import styled from '@emotion/styled';
import { habtic } from '@habtic/styled';

export const Card = styled(habtic.section)(({ theme }) => ({
  padding: '3em',
  borderRadius: '1.5em',
  minHeight: '280pt',
  minWidth: '200pt',
  margin: 'auto',
  color: 'inherit',
  maxHeight: '100%',
  overflowY: 'auto',
  width: '100%',
  backgroundColor: theme.colorMode === 'dark' ? '#1A202C' : '#F7FAFC',
}));

export const Center = styled(habtic.section)({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 100%',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
});
