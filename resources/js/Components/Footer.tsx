import React from "react";
import {Link} from "@inertiajs/react";

class Footer extends React.Component<any, any> {
    render() {
        return (
            <footer className={'footer'}>
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__logo"><img src="/img/logo.svg" alt=""/></div>
                    </div>
                    <div className="footer__row">
                        <nav className="footer__nav">
                            <ul className="nav__list">
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>О нас</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Связаться</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>FAQ</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Войти</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__row">
                        <div className="footer__copyright">TableBooky.com | All rights reserved</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
