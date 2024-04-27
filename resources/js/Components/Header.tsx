import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
// @ts-ignore
import Burger from '../../../public/img/hamburger.svg?react';
// @ts-ignore
import CloseBurger from '../../../public/img/close.svg?react';
import LoginModal from '@/Components/Modal/LoginModal';
import RegisterModal from '@/Components/Modal/RegisterModal';

export default function Header({ auth }: { auth: any }) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(prevState => !prevState);
  };
  const handleImageError = () => {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const changeModal = () => {
    if (showLoginModal) {
      setShowLoginModal(false);
      setShowRegisterModal(true);
    } else {
      setShowLoginModal(true);
      setShowRegisterModal(false);
    }
  };
  return (
    <header className={'header'}>
      <div className={'container'}>
        <div className={'header__row'}>
          <div className={'header__section container__sections'}>
            <div className={'header__section-menu container__sections-left'}>
              <Link href={'/'} className={'header__logo logo'}>
                <img className={'logo__image'} src="/img/logo.svg" alt=""/>
              </Link>
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
                  {auth.user ? (
                      <li className="nav__list-item">
                        <Link href={route('logout')} method="post">
                          Выйти
                        </Link>
                      </li>
                    ) :
                    (
                      <>
                        <li className="nav__list-item">
                          <a
                            onClick={() => setShowLoginModal(true)}
                          >
                            Войти
                          </a>
                        </li>
                        <li className="nav__list-item">
                          <a

                            onClick={() => setShowRegisterModal(true)}
                          >
                            Регистрация
                          </a>
                        </li>
                      </>
                    )
                  }
                </ul>
              </nav>
              <div className="xl:hidden">
                <div className="navbar-burger" onClick={toggleModal}>
                  <Burger/>
                </div>
              </div>

              {openModal &&
                  <div className={'burger__menu'}>
                      <div className="fixed inset-0 right-0 bg-gray-900 bg-opacity-50 z-50">
                          <div className="absolute inset-y-0 right-0 w-64 bg-white shadow-lg">
                              <div className="p-4">
                                  <div className="menu__header">
                                      <CloseBurger onClick={toggleModal}/>
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
                                              <button className={'burger__menu-btn'} onClick={(e) => {
                                                e.preventDefault();
                                              }}>
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
            {auth.user &&
                <div className={'header__section-user container__sections-right'}>
                    <div className={'header__user'}>
                        <Link href={route('profile.edit')}>
                            <div className={'user__name'}>
                              {auth.user.name}
                            </div>
                            <div className={'user__photo'}
                                 style={{ backgroundImage: `url(${auth.user.avatar})` }}
                            >
                            </div>
                        </Link>
                    </div>
                </div>
            }
            {!auth.user && (
              <>
                <LoginModal changeModal={changeModal} onClose={() => setShowLoginModal(false)}
                            visible={showLoginModal} canResetPassword={true}/>
                <RegisterModal visible={showRegisterModal} onClose={() => setShowRegisterModal(false)}
                               changeModal={changeModal}/>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
    ;
}

