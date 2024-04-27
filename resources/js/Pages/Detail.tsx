import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import {Link} from "@inertiajs/react";
// @ts-ignore
import Arrow from '../../../public/img/left-arrow.svg?react';
// @ts-ignore
import Map from '../../../public/img/map-icon.svg?react';
// @ts-ignore
import Clock from '../../../public/img/clock-icon.svg?react';
// @ts-ignore
import Burger from '../../../public/img/burger-icon.svg?react';
// @ts-ignore
import Calendar from '../../../public/img/calendar.svg?react';
// @ts-ignore
import People from '../../../public/img/people.svg?react';
import '../../less/common.blocks/detail/detail.less';

export default class Detail extends React.Component {
    render() {
        return (
            <>
                <MainLayout>
                    <div className={'container'}>
                        <div className={'container__sections'}>
                            <div className={'container__sections-left'}>
                                <div className={'detail'}>

                                    <div className={'detail__header detail--border-bottom'}>
                                        <div className={'detail__header-container'}>
                                            <Link className={'detail__back'} href={route('main')}>
                                                <Arrow/>
                                                <span className={'detail__back-text'}>Назад</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className={'detail__container'}>
                                        <img className={'detail__image'}
                                             src="https://www.nam-nyam.ru/upload/iblock/cca/ccae030b0714d7d9271654d02acde786.jpg"
                                             alt=""/>
                                    </div>

                                    <div className={'detail__container detail--border-bottom'}>
                                        <div className={'detail__name-block detail--border-bottom'}>
                                            <p className={'detail__name'}>Villagio Restaurant & Bar</p>
                                        </div>
                                        <div className={'detail__description'}>
                                            <div className={'detail__description-left'}>
                                                <div className={'detail__description-block'}>
                                                    <div className={'detail__logo'}>
                                                        <Map/>
                                                    </div>
                                                    <span className={'detail__description-text'}>
                                                    360 San Lorenzo Avenue, Suite 1430 Coral Gables, FL 33146-1865 |
                                                </span>
                                                </div>
                                                <div className={'detail__description-block'}>
                                                    <div className={'detail__logo'}>
                                                        <Clock/>
                                                    </div>
                                                    <span className={'detail__description-text'}>
                                                        10:30 AM - 11:00 PM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={'detail__description-right'}>
                                                <div className={'detail__description-block detail__description-block' +
                                                    '--baseline'}>
                                                    <div className={'detail__logo'}>
                                                        <Burger/>
                                                    </div>
                                                    <span className={'detail__description-text'}>
                                                        Villagio restaurant and bar has one mission: to provide guests
                                                        with a fine and fresh seafood experience. Featuring seasonal
                                                        and sustainable seafood that is flown in fresh daily, our
                                                        chef-driven menu proves that no matter when you’re dining,
                                                        seafood can be truly exceptional. to provide guests with a fine
                                                        and fresh seafood experience. Featuring seasonal and to provide
                                                        guests with a fine and fresh Read More...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={'detail__container detail__container-order'}>
                                        <p className={'detail__order-client'}>John Doe</p>
                                        <div className={'detail__order'}>
                                            <div className={'detail__order-block'}>
                                                <Calendar/>
                                                <p>30 November 2022 | 09:30 PM</p>
                                            </div>
                                            <div className={'detail__order-block'}>
                                                <People/>
                                                <p>4 Guests</p>
                                            </div>
                                        </div>
                                        <button className={'detail__cansel'}>Cancel Booking</button>
                                    </div>

                                    <div className={'detail__container'}>

                                    </div>

                                </div>
                            </div>
                            <div className={'container__sections-right'}>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </>
        );
    }
}
