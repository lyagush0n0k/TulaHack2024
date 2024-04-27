import PaginatedLink from '@/types/PaginatedLink';
import { Link } from '@inertiajs/react';
import classNames from 'classnames';
import parse from 'html-react-parser';

interface Props {
  links: PaginatedLink[],
}

export default function Pagination({ links }: Props) {

  return (
    <nav aria-label="Page navigation example" className="py-2 flex justify-center">
      <ul className="list-style-none flex">
        {links.map((item, index) => (
          <li key={index} aria-current="page">
            <Link
              preserveState
              preserveScroll
              className={classNames(('relative block rounded text-sm px-3 py-1.5 transition-all duration-300'), {
                'bg-primary-100 font-medium text-primary-700 ': item.active,
                'bg-transparent text-neutral-600 hover:bg-neutral-100': !item.active
              })}
              href={item.url}
            >
              {parse(item.label)}
              {item.active && (
                <span
                  className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                >
                  (current)
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
