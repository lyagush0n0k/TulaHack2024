import React from "react";
import {Link} from "@inertiajs/react";

class Header extends React.Component<any, any> {
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
                            </div>
                            <div className={'header__section-user container__sections-right'}>
                                <div className={'header__user'}>
                                    <Link href="/">
                                    <div className={'user__name'}>
                                            <span>Bob&nbsp;</span>
                                            Smith
                                    </div>
                                    <div className={'user__photo'} style={{backgroundImage:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv3NWK5Y_OjtsVBBgh9MnE23QWLG5iCFgHIOOfADuZQ&s"'}}   >
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
