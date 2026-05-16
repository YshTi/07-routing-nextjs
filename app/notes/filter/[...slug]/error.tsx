'use client';

interface NotesFilterErrorProps {
  error: Error;
}

export default function NotesFilterError({ error }: NotesFilterErrorProps) {
  return <p>Could not fetch the list of notes. {error.message}</p>;
}