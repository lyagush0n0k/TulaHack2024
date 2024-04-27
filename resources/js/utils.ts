import { usePage } from '@inertiajs/react';

export function getQuery() {
  const value = usePage().props.ziggy as any;

  return (value as any).query;
}
