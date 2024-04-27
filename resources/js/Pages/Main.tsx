import React, {useState} from 'react';
import MainLayout from '@/Layouts/MainLayout';
import {Link} from '@inertiajs/react';
import RightBlock from '@/Components/RightBlock';
import {PageProps} from "@/types";

export default function Main({auth, restaurants}: PageProps & { restaurants: any[] }) {

    return (
        <>
            <MainLayout user={auth}>
                <div className="container">
                    <div className="container__sections">
                        <div className="container__sections-left">
                            <div className={'restaurant__block'}>
                                <h2 className={'restaurant__title'}>Рестораны</h2>
                                <div className={'restaurant-items'}>
                                    <div className={'restaurant-items__list'}>
                                        {restaurants && restaurants.map((item, index) => (
                                            <Link href={route('detail', {id: item.id})}
                                                  className={'restaurant-items__item'}>
                                                <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                     className={'restaurant-items__item-image'}/>
                                                <h3 className={'restaurant-items__item-name'}>{item.name}</h3>
                                                <p className={'restaurant-items__item-address'}>{item.address}</p>
                                                <p className={'restaurant-items__item-hours'}>{item.schedule[0].starts_at} - {item.schedule[0].ends_at}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RightBlock/>
                    </div>

                </div>
            </MainLayout>
        </>
    );

}
