import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import React from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

export default function Main({ auth }: PageProps) {

  return (
    <>
      <MainLayout user={auth}>
        <div className="container">
          <div className="profile">
            <div className="">
              <div className="restaurant__block">
                <h2 className="restaurant__title">Профиль</h2>
                <div className="restaurant-items flex gap-5 flex-col">
                  <img
                    className="rounded-full group transition-all w-[100px] h-[100px]"
                    src={auth.user.avatar}
                    alt={auth.user.name}
                  />
                  <div>
                    <InputLabel htmlFor="name" value="ФИО"/>

                    <TextInput
                      id="name"
                      className="mt-1 block w-full"
                      value={auth.user.name}
                      disabled
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="phone" value="Телефон"/>

                    <TextInput
                      id="phone"
                      className="mt-1 block w-full"
                      value={auth.user.phone}
                      disabled
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="email" value="Почта"/>

                    <TextInput
                      id="email"
                      className="mt-1 block w-full"
                      value={auth.user.email}
                      disabled
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="created_at" value="Дата регистрации"/>

                    <TextInput
                      id="created_at"
                      className="mt-1 block w-full"
                      value={auth.user.created_at}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="restaurant__block">
                <h2 className="restaurant__title">Профиль</h2>
                <div className="restaurant-items flex gap-5 flex-col">
                  <img
                    className="rounded-full group transition-all w-[100px] h-[100px]"
                    src={auth.user.avatar}
                    alt={auth.user.name}
                  />
                  <div>
                    <InputLabel htmlFor="name" value="ФИО"/>

                    <TextInput
                      id="name"
                      className="mt-1 block w-full"
                      value={auth.user.name}
                      disabled
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="phone" value="Телефон"/>

                    <TextInput
                      id="phone"
                      className="mt-1 block w-full"
                      value={auth.user.phone}
                      disabled
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="email" value="Почта"/>

                    <TextInput
                      id="email"
                      className="mt-1 block w-full"
                      value={auth.user.email}
                      disabled
                    />
                  </div>

                  <div>
                    <InputLabel htmlFor="created_at" value="Дата регистрации"/>

                    <TextInput
                      id="created_at"
                      className="mt-1 block w-full"
                      value={auth.user.created_at}
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </MainLayout>
    </>
  );

}
