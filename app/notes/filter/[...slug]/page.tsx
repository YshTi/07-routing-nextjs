import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { notFound } from 'next/navigation';

import { fetchNotes } from '@/lib/api';
import type { NoteTag } from '@/types/note';
import NotesClient from './Notes.client';

const PER_PAGE = 12;

const validTags: NoteTag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

interface FilteredNotesPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function FilteredNotesPage({
  params,
}: FilteredNotesPageProps) {
  const { slug } = await params;
  const selectedTag = slug[0];

  if (!selectedTag) {
    notFound();
  }

  if (selectedTag !== 'all' && !validTags.includes(selectedTag as NoteTag)) {
    notFound();
  }

  const tag = selectedTag === 'all' ? undefined : (selectedTag as NoteTag);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: PER_PAGE,
        search: '',
        tag,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}