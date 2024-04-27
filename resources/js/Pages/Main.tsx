import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import {Link} from '@inertiajs/react';
import RightBlock from '@/Components/RightBlock';

export default class Main extends React.Component {
    render() {
        const {restaurants} = this.props
        console.log(restaurants)
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
                                            {restaurants.data.map((item, index) => (
                                                <Link href={route('detail', {id: item.id})} className={'restaurant-items__item'}>
                                                    <img src={'/img/resturant.png'} alt={'Логотип ресторана'}
                                                         className={'restaurant-items__item-image'}/>
                                                    <h3 className={'restaurant-items__item-name'}>{item.name}</h3>
                                                    <p className={'restaurant-items__item-address'}>{item.address}</p>
                                                    <p className={'restaurant-items__item-hours'}>asd PM</p>
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
}
