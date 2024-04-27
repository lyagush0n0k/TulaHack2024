import React from 'react';

import {Link} from "@inertiajs/react";

// @ts-ignore
import Burger from "../../../public/img/hamburger.svg?react";

// @ts-ignore
import CloseBurger from "../../../public/img/close.svg?react";

class Header extends React.Component {
    constructor({props}: { props: any }) {
        super(props);

        this.state = {
            // @ts-ignore
            openModal: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        // @ts-ignore
        this.setState(prevState => ({openModal: !prevState.openModal}), () => {
        });
    }

    render() {
        return (
            <header className={'header'}>
                <div className={'container'}>
                    <div className={'header__row'}>
                        <div className={'header__section container__sections'}>
                            <div className={'header__section-menu container__sections-left'}>
                                <div className={'header__logo logo'}>
                                    <img className={'logo__image'} src='/img/logo.svg' alt=""/>
                                </div>
                                <nav className={'header__nav nav'}>
                                    <ul className="nav__list">
                                        <li className="nav__list-item">
                                            <a className={'active'} href="javascript:void(0)">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav__list-item">
                                            <a href="javascript:void(0)">
                                                Связаться
                                            </a>
                                        </li>
                                        <li className="nav__list-item">
                                            <a href="javascript:void(0)">
                                                Выйти
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="xl:hidden">
                                    <div className="navbar-burger" onClick={this.toggleModal}>
                                        <Burger/>
                                    </div>
                                </div>

                                {
                                    // @ts-ignore
                                    this.state.openModal &&
                                    <div className={'burger__menu'}>
                                        <div className="fixed inset-0 right-0 bg-gray-900 bg-opacity-50 z-50">
                                            <div className="absolute inset-y-0 right-0 w-64 bg-white shadow-lg">
                                                <div className="p-4">
                                                    <div className="menu__header">
                                                        <CloseBurger onClick={this.toggleModal}/>
                                                    </div>
                                                    <div className="menu__body">

                                                        <ul className="nav__list">
                                                            <li className="nav__list-item">
                                                                <a className={'active'} href="javascript:void(0)">
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li className="nav__list-item">
                                                                <a href="javascript:void(0)">
                                                                    Связаться
                                                                </a>
                                                            </li>
                                                            <li className="nav__list-item">
                                                                <button className={'burger__menu-btn'} onClick={(e) => { e.preventDefault(); }}>
                                                                    Выйти
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>
                            <div className={'header__section-user container__sections-right'}>
                                <div className={'header__user'}>
                                    <Link href="/">
                                        <div className={'user__name'}>
                                            <span>Bob&nbsp;</span>
                                            Smith
                                        </div>
                                        <div className={'user__photo'}
                                             style={{backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv3NWK5Y_OjtsVBBgh9MnE23QWLG5iCFgHIOOfADuZQ&s"'}}>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
