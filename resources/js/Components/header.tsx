import React from "react";

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
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
