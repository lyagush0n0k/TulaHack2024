import React from "react";
import {Link} from "@inertiajs/react";

class Footer extends React.Component<any, any> {
    render() {
        return (
            <footer className={'footer'}>
                <div className="container">
                    <div className="footer__row">
                        <div className="footer__logo"><img src="/img/FooterLogo.svg" alt=""/></div>
                    </div>
                    <div className="footer__row">
                        <nav className="footer__nav">
                            <ul className="nav__list">
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Service</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Service</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Service</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Service</Link>
                                </li>
                                <li className="nav__list-item">
                                    <Link href={''} className={'nav__list-item-link'}>Service</Link>
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
