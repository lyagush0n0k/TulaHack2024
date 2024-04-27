import { Link } from '@inertiajs/react';
import classNames from 'classnames';
import parse from 'html-react-parser';

interface Props {
  url: string,
  label: string,
  active: boolean,
}

export default function PaginationLink({ url, label, active }: Props) {
  return (
    <li aria-current="page">
      <Link
        preserveState
        preserveScroll
        className={classNames(('relative block rounded text-sm px-3 py-1.5 transition-all duration-300'), {
          'bg-primary-100 font-medium text-primary-700 ': active,
          'bg-transparent text-neutral-600 hover:bg-neutral-100': !active
        })}
        href={url}
      >
        {parse(label)}
        {active && (
          <span
            className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
          >
            (current)
          </span>
        )}
      </Link>
    </li>
  );
}
