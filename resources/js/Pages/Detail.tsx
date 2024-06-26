import React, {useEffect, useState} from 'react';
import MainLayout from '@/Layouts/MainLayout';
import {Link} from '@inertiajs/react';
// @ts-ignore
import Table from '../../../public/img/table-icon.svg?react';
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
import {CustomProvider, DatePicker} from 'rsuite';
import 'rsuite/dist/rsuite.css';
import {Fancybox} from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/less';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';
import {PageProps} from '@/types';
import PrimaryButton from '../Components/PrimaryButton';
import {ruRU} from 'rsuite/locales';
import RightBlock from "@/Components/RightBlock";

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

export default function Detail({auth, restaurant, schedule, bookings, media}: PageProps & {
    restaurant: any[],
    schedule: any[],
    bookings: any[],
    media: string[],
}) {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch the CSRF token from the Laravel backend
        async function fetchCsrfToken() {
            try {
                const response = await fetch(route('crsf'));
                const {token} = await response.json();
                setCsrfToken(token);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        }

        fetchCsrfToken();
    }, []);


    const [formData, setFormData] = useState({
        date: '',
        time: '',
        duration: '',
        guests: ''
    });

    const [formDataSend, setFormDataSend] = useState({
        table: '',
    });

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

    var tableOptions = [];

    const orderSend = async (e) => {
        e.preventDefault();
        const response = await fetch(route('booking.store', {
            restaurant_id: restaurant.id,
            date: formData.date,
            time: formData.time,
            duration: formData.duration.value,
            guest_count: formData.guests.value,
            table_id: formDataSend.table.value,
            user_id: auth.user.id
        }), {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken // Include the CSRF token in the headers
            }
        })

        let responseData = await response.json();
        console.log(responseData);

        window.location.reload();
    };

    const cancelBooking = async (e, bookingId) => {
        e.preventDefault();
        const response = await fetch(route('booking.delete', {
            booking_id: bookingId
        }), {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': csrfToken // Include the CSRF token in the headers
            }
        })

        let responseData = await response.json();
        console.log(responseData);

        window.location.reload();
    }

    const fetchAvailableTables = async (e) => {
        e.preventDefault();

        const response = await fetch(route('booking.getAvailableTables', {
            restaurant_id: restaurant.id,
            date: formData.date,
            time: formData.time,
            duration: formData.duration.value,
            guest_count: formData.guests.value
        }), {
            method: 'GET'
        })

        let responseData = await response.json();
        console.log(responseData);

        if (!responseData.length) {
            document.querySelector('.detail__container--error').style.display = 'block';
            return;
        }

        document.querySelector('.detail__container--booking').style.display = 'flex';

        if (tableOptions.length !== 0) {
            tableOptions = [];
        }

        responseData.forEach((element) => {
            tableOptions.push({value: element.id, label: element.number});
        });
    };

    return (
        <>
            <MainLayout user={auth}>
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
                                    <Swiper
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay, Pagination]}
                                        pagination={{
                                            clickable: true,
                                        }}
                                    >
                                        {media.map((item: string, index: number) => (
                                            <SwiperSlide key={index}>
                                                <img className={'detail__image'}
                                                     src={item}
                                                     alt=""/>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
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
                                                        {schedule.starts_at} - {schedule.ends_at}
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

                                {bookings.map((item, index) => (
                                    <div className={'detail__container detail__container-order'}>
                                        <div className={'detail__order'}>
                                            <div className={'detail__order-block'}>
                                                <Calendar/>
                                                <p>{new Date(item.starts_at).toLocaleString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: '2-digit',
                                                })} | {new Date(item.starts_at).toLocaleString(undefined, {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })} - {new Date(item.ends_at).toLocaleString(undefined, {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</p>
                                            </div>
                                            <div className={'detail__order-block'}>
                                                <Table/>
                                                <p>Стол: {item.table_id}</p>
                                            </div>
                                            <div className={'detail__order-block'}>
                                                <People/>
                                                <p>Гостей: {item.guest_count}</p>
                                            </div>
                                        </div>
                                        <button className={'detail__cansel'} onClick={(e) => cancelBooking(e, item.id)}>Cancel Booking
                                        </button>
                                    </div>
                                ))}

                                <div className={'detail__container'}>
                                    <form className={'detail__order-send'}>
                                        <div className={'detail__input'}>
                                            <p>Дата бронирования:</p>
                                            <CustomProvider locale={ruRU}>
                                                <DatePicker oneTap format="dd MMMM yyyy" value={formData.date}
                                                            onChange={value => setFormData({
                                                                ...formData,
                                                                date: value
                                                            })}/>
                                            </CustomProvider>
                                        </div>
                                        <div className={'detail__input'}>
                                            <p>Время бронирования:</p>
                                            <CustomProvider locale={ruRU}>
                                                <DatePicker format="HH:mm"
                                                            onChange={value => setFormData({
                                                                ...formData,
                                                                time: value
                                                            })}/>
                                            </CustomProvider>
                                        </div>
                                        <div className={'detail__input'}>
                                            <p>Длительность бронирования:</p>
                                            <Select placeholder={''} options={timeOptions} value={formData.duration}
                                                    onChange={value => setFormData({...formData, duration: value})}/>
                                        </div>
                                        <div className={'detail__input'}>
                                            <p>Количество людей:</p>
                                            <Select placeholder={''} options={peopleOptions} value={formData.guests}
                                                    onChange={value => setFormData({...formData, guests: value})}/>
                                        </div>
                                        <div className={'detail__input'}>
                                            <PrimaryButton className={'detail__button-submit'}
                                                           onClick={fetchAvailableTables}>
                                                Найти
                                            </PrimaryButton>
                                        </div>

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
                                                        onChange={value => setFormDataSend({
                                                            ...formDataSend,
                                                            table: value
                                                        })}
                                                        className={'detail__select-time'}/>
                                            </div>
                                            <button className={'detail__button-submit' +
                                            ' detail__button-submit--booking'} type={'submit'} onClick={orderSend}>
                                                Забронировать
                                            </button>
                                        </form>
                                    </div>
                                    <div className={'detail__booking-right'}>
                                        <a data-fancybox="Single image"
                                           href="https://media.maximilians.ru/chelny/page/contacts/plan-chelny-min.jpg">
                                            <img
                                                src="https://media.maximilians.ru/chelny/page/contacts/plan-chelny-min.jpg"
                                                alt=""/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={'container__sections-right none'}>
                            <RightBlock/>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );

}
