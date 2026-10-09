import type { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => <h1>{children}</h1>;