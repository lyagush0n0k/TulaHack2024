import { Head, router } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import AdminLayout from '@/Layouts/AdminLayout';
import { PaginatedCollection } from '@/types/PaginatedCollection';
import React, { useState } from 'react';
import TableHead from '@/Components/Table/TableHead';
import Table from '@/Components/Table/Table';
import Pagination from '@/Components/Pagination/Pagination';
import { getQuery } from '@/utils';

interface Props extends PageProps{
  users: PaginatedCollection<User>
}

export default function Users({ auth, users }: Props) {
  const query = getQuery();

  const [search, setSearch] = useState(query.search)

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const visit = (search: string) => {
    router.visit('', {
      method: 'get',
      replace: true,
      data: {
        // @ts-ignore
        search: search,
        page: undefined
      },
      preserveState: true
    })
  };

  const headValues = [
    'Id',
    'Имя',
    'Телефон',
    'Почта',
    'Зарегистрирован',
  ];


  return (
    <AdminLayout
      user={auth.user}
    >
      <Head title="Пользователи" />

      <div className="py-12">
        <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className='p-2'>
              <div className="p-2 gap-5 flex flex-row flex-wrap">
                <div className="flex items-center justify-center">
                  <div className="flex border-2 rounded">
                    <input onChange={handleChange} value={search} type="text" className="px-4 py-2 w-80" placeholder="Поиск по имени"/>
                    <button onClick={() => visit(search)} className="flex items-center justify-center px-4 border-l">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24">
                        <path
                          d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-scroll">
              <Table>
                <TableHead items={headValues}/>
                <tbody>
                {users.data.map((item, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="px-4 py-4 break-words">{item.id}</td>
                    <td className="px-4 py-4 break-words">{item.name}</td>
                    <td className="px-4 py-4 break-words">{item.phone}</td>
                    <td className="px-4 py-4 break-words"><a href={'mailto:' + item.email}>{item.email}</a></td>
                    <td className="px-4 py-4 break-words">{item.created_at}</td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </div>

            {users.links.length > 3 && (
              <Pagination links={users.links}/>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
