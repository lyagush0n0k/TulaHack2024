  import { InertiaLinkProps, Link } from '@inertiajs/react';
  import classNames from 'classnames';
  import { useSidebar } from '@/contexts/SidebarContext';

  interface Props extends InertiaLinkProps{
    icon: any,
    text: string,
    active: boolean,
  }

  export default function SidebarItem({ href, icon, text, active, method = 'get', as }: Props) {
    const { isExpanded } = useSidebar();

    return (
      <li
        className={classNames(
          'relative py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group',
          {
            'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800': active,
            'hover:bg-indigo-50 text-gray-600': !active
          }
        )}>
        <Link alt={text} className="flex items-center" href={href} method={method} as={as}>
          {icon}
          <span
            className={classNames('overflow-hidden transition-all text-left',
              {
                'w-52 ml-3': isExpanded,
                'w-0': !isExpanded
              })}
          >
          {text}
        </span>
        </Link>
      </li>
    );
  }
