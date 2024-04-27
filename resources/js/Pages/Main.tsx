import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import {Link} from "@inertiajs/react";
import RightBlock from "@/Components/RightBlock";

export default class Main extends React.Component {
    render() {
        return (
            <>
                <MainLayout>
                    <div className="container">
                        <div className="container__sections">
                            <div className="container__sections-left">
                                <div className={'restaurant__block'}>
                                    <h2 className={'restaurant__title'}>Рестораны</h2>
                                    <div className={'restaurant-items'}>
                                        <div className={'restaurant-items__list'}>
                                            <Link href={''} className={'restaurant-items__item'}>
                                                <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                     className={'restaurant-items__item-image'}/>
                                                <h3 className={'restaurant-items__item-name'}>Ресторан 2</h3>
                                                <p className={'restaurant-items__item-address'}>Адрес ресторана 2</p>
                                                <p className={'restaurant-items__item-hours'}>11:30 AM - 11:00 PM</p>
                                            </Link>
                                            <Link href={''} className={'restaurant-items__item'}>
                                                <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                     className={'restaurant-items__item-image'}/>
                                                <h3 className={'restaurant-items__item-name'}>Ресторан 2</h3>
                                                <p className={'restaurant-items__item-address'}>Адрес ресторана 2</p>
                                                <p className={'restaurant-items__item-hours'}>11:30 AM - 11:00 PM</p>
                                            </Link>
                                            <Link href={''} className={'restaurant-items__item'}>
                                                <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                     className={'restaurant-items__item-image'}/>
                                                <h3 className={'restaurant-items__item-name'}>Ресторан 2</h3>
                                                <p className={'restaurant-items__item-address'}>Адрес ресторана 2</p>
                                                <p className={'restaurant-items__item-hours'}>11:30 AM - 11:00 PM</p>
                                            </Link>
                                            <Link href={''} className={'restaurant-items__item'}>
                                                <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                     className={'restaurant-items__item-image'}/>
                                                <h3 className={'restaurant-items__item-name'}>Ресторан 2</h3>
                                                <p className={'restaurant-items__item-address'}>Адрес ресторана 2</p>
                                                <p className={'restaurant-items__item-hours'}>11:30 AM - 11:00 PM</p>
                                            </Link>
                                            <Link href={''} className={'restaurant-items__item'}>
                                                <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                     className={'restaurant-items__item-image'}/>
                                                <h3 className={'restaurant-items__item-name'}>Ресторан 2</h3>
                                                <p className={'restaurant-items__item-address'}>Адрес ресторана 2</p>
                                                <p className={'restaurant-items__item-hours'}>11:30 AM - 11:00 PM</p>
                                            </Link>
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
}
