import { User } from '@/types';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { ChevronFirst, ChevronLast, LogOutIcon } from 'lucide-react';
import classNames from 'classnames';
import { useSidebar } from '@/contexts/SidebarContext';
import { PropsWithChildren } from 'react';
import SidebarItem from '@/Components/Sidebar/SidebarItem';

export default function Sidebar({ children, user }: PropsWithChildren<{ user: User }>) {
  const { isExpanded, setIsExpanded } = useSidebar();

  return (
    <aside className="h-screen hidden md:block">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
            <Link href="/">
              <ApplicationLogo
                className={classNames("block h-9 fill-current text-gray-800",
                  {
                    'w-auto': isExpanded,
                    'w-0': !isExpanded
                  })}/>
            </Link>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {isExpanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <div className="px-3">
          <Link
            className="flex items-center relative py-2 my-1 font-medium rounded-md cursor-pointer"
            href={route('profile.index')}
            >
            <img
              className="rounded-full group transition-all w-[48px] h-[48px]"
              src={user.avatar}
              alt={user.name}
            />
            <span className={classNames('overflow-hidden transition-all',
              {
                'w-52 ml-3': isExpanded,
                'w-0': !isExpanded
              })}
            >
              {user.name}
            </span>
          </Link>
        </div>
        <ul className="flex-1 px-3 overflow-y-scroll">{children}</ul>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div className="leading-4">
          <ul className="flex-1 px-3 pb-3">
            <SidebarItem
              href={route('logout')}
              method='post'
              icon={<LogOutIcon/>}
              text='Выйти'
              active={false}
              as="button"
            />
          </ul>
        </div>
      </nav>
    </aside>
  );
}
