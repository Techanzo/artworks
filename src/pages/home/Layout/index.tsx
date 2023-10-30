import { ReactNode } from 'react';

import Header from './Header';
import { Root } from './styles';

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  );
};

export default Layout;
