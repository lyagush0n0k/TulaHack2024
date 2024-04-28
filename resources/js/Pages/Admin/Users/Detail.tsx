import {Head} from '@inertiajs/react';
import {PageProps, User} from '@/types';
import AdminLayout from '@/Layouts/AdminLayout';
import React from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

interface Props extends PageProps {
  user: User
}

export default function Detail({auth, user}: Props) {

  return (
    <AdminLayout
      user={auth.user}
    >
      <Head title="Пользователи"/>

      <div className="py-12">
        <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="flex p-2">
              <div className="space-y-6 flex-1">
                <img
                  className="rounded-full group transition-all w-[100px] h-[100px]"
                  src={user.avatar}
                  alt={user.name}
                />
                <div>
                  <InputLabel htmlFor="name" value="ФИО"/>

                  <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={user.name}
                    disabled
                  />
                </div>

                <div>
                  <InputLabel htmlFor="phone" value="Телефон"/>

                  <TextInput
                    id="phone"
                    className="mt-1 block w-full"
                    value={user.phone}
                    disabled
                  />
                </div>

                <div>
                  <InputLabel htmlFor="email" value="Почта"/>

                  <TextInput
                    id="email"
                    className="mt-1 block w-full"
                    value={user.email}
                    disabled
                  />
                </div>

                <div>
                  <InputLabel htmlFor="created_at" value="Дата регистрации"/>

                  <TextInput
                    id="created_at"
                    className="mt-1 block w-full"
                    value={user.created_at}
                    disabled
                  />
                </div>
              </div>
              <div className="flex-[2_1_0%]">

              </div>

            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
