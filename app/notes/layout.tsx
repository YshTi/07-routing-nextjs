import type { ReactNode } from 'react';

interface NotesLayoutProps {
  children: ReactNode;
}

export default function NotesLayout({ children }: NotesLayoutProps) {
  return <>{children}</>;
}