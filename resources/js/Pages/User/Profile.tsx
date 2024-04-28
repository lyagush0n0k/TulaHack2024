import MainLayout from '@/Layouts/MainLayout';
import { PageProps } from '@/types';
import React from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
// @ts-ignore
import Calendar from '../../../../public/img/calendar.svg?react';
// @ts-ignore
import People from '../../../../public/img/people.svg?react';

export default function Main({ auth, bookings }: PageProps & {bookings: any}) {
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
                <h2 className="restaurant__title">История и Последние бронирования</h2>
                <div className="restaurant-items flex gap-5 flex-col">
                  {bookings && bookings.data.map((item, index) => (
                    <div key={index} className="profile__booking-item">
                      <div>
                        <img className="profile__booking-image" src={item.restaurant.primary_image_url}/>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="pb-1">{item.restaurant.name}</h3>
                        <div className="flex flex-col gap-1">
                          {item.status}
                          <div className="flex gap-2 items-center">
                            <Calendar/>
                            <p>{new Date(item.starts_at).toLocaleString(undefined, {
                              year: 'numeric',
                              month: 'long',
                              day: '2-digit',
                            })} | {new Date(item.starts_at).toLocaleString(undefined, {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}</p>
                          </div>
                          <div className="flex flex-row gap-2 items-center"><People/>Количество гостей: {item.guest_count}</div>
                        </div>
                      </div>

                    </div>
                  ))}

                </div>
              </div>
            </div>
          </div>

        </div>
      </MainLayout>
    </>
  );

}
