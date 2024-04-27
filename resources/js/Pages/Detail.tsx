import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import {Link} from '@inertiajs/react';
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
import Select from 'react-select';
import {DatePicker} from 'rsuite';
import 'rsuite/dist/rsuite.css';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const options = {
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['close'],
        },
    },
};

Fancybox.bind('[data-fancybox="Single image"]', options);

export default class Detail extends React.Component {
    render() {
        const timeOptions = [
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'},
            {value: '10', label: '10'},
            {value: '11', label: '11'},
            {value: '12', label: '12'},
        ];

        const peopleOptions = [
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'},
            {value: '10', label: '10'},
        ];

        const tableOptions = [
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'},
            {value: '10', label: '10'},
        ];

        const {restaurant} = this.props;

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
                                            <p className={'detail__name'}>{restaurant.name}</p>
                                        </div>
                                        <div className={'detail__description'}>
                                            <div className={'detail__description-left'}>
                                                <div className={'detail__description-block'}>
                                                    <div className={'detail__logo'}>
                                                        <Map/>
                                                    </div>
                                                    <span className={'detail__description-text'}>
                                                    {restaurant.address}
                                                </span>
                                                </div>
                                                <div className={'detail__description-block'}>
                                                    <div className={'detail__logo'}>
                                                        <Clock/>
                                                    </div>
                                                    <span className={'detail__description-text'}>
                                                        time - time
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
                                                        {restaurant.info}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={'detail__container detail__container-order'}>
                                        <p className={'detail__order-client'}>John Deez Nuts</p>
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
                                        <form action="" className={'detail__order-send'}>
                                            <div className={'detail__input'}>
                                                <p>Дата бронирования:</p>
                                                <DatePicker/>
                                            </div>
                                            <div className={'detail__input'}>
                                                <p>Время бронирования:</p>
                                                <Select placeholder={''} options={timeOptions}
                                                        className={'detail__select-time'}/>
                                            </div>
                                            <div className={'detail__input'}>
                                                <p>Количество людей:</p>
                                                <Select placeholder={''} options={peopleOptions}
                                                        className={'detail__select-people'}/>
                                            </div>
                                            <button className={'detail__button-submit'} type={'submit'}>
                                                Найти
                                            </button>
                                        </form>
                                    </div>
                                    <div className={'detail__container detail__container--error'}>
                                        <p>По данному времени свободных столиков нет</p>
                                    </div>
                                    <div className={'detail__container detail__container--booking'}>
                                        <div className={'detail__booking-left'}>
                                            <form className={'detail__form-order-submit'} action="">
                                                <div className={'detail__input'}>
                                                    <p>Номер столика:</p>
                                                    <Select placeholder={''} options={tableOptions}
                                                            className={'detail__select-time'}/>
                                                </div>
                                                <button className={'detail__button-submit' +
                                                ' detail__button-submit--booking'} type={'submit'}>
                                                    Забронировать
                                                </button>
                                            </form>
                                        </div>
                                        <div className={'detail__booking-right'}>
                                            <a data-fancybox="Single image" href="https://media.maximilians.ru/chelny/page/contacts/plan-chelny-min.jpg">
                                                <img
                                                    src="https://media.maximilians.ru/chelny/page/contacts/plan-chelny-min.jpg"
                                                    alt=""/>
                                            </a>
                                        </div>
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
