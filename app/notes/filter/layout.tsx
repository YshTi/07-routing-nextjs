import type { ReactNode } from 'react';
import css from './LayoutNotes.module.css';

interface NotesFilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function NotesFilterLayout({
  children,
  sidebar,
}: NotesFilterLayoutProps) {
  return (
    <main className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.notesWrapper}>{children}</section>
    </main>
  );
}