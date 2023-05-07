import type { FC } from 'react';
import { useLayoutEffect } from 'react';

import { StyledContent, StyledWrapper } from './styles';

type Props = {
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({children}) => {

  return (
    <StyledWrapper>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  );
};


