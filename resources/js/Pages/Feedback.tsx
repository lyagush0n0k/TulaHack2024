import MainLayout from '@/Layouts/MainLayout';
import {PageProps} from "@/types";
import '../../less/common.blocks/feedback/feedback.less';

export default function Feedback({auth, restaurants}: PageProps & { restaurants: any[] }) {

    return (
        <>
            <MainLayout user={auth}>
                <div className={'container'}>
                    <div className={'feedback'}>
                        <div className={'feedback__header'}>
                            <p className={'feedback__header-text'}>
                                Мы ответим на все ваши вопросы
                            </p>
                        </div>
                        <form className={'feedback__form'} action="">
                            <div className={'feedback__form-left'}>
                                <div className={'feedback__input-block'}>
                                    <p>Имя:</p>
                                    <input name={'name'} placeholder={'Иван'} className={'feedback__input'} type="text" required={true}/>
                                </div>
                                <div className={'feedback__input-block'}>
                                    <p>Email:</p>
                                    <input name={'email'} placeholder={'ivan@email.com'} className={'feedback__input'} type="email" required={true}/>
                                </div>
                                <div className={'feedback__input-block'}>
                                    <p>Номер телефона:</p>
                                    <input name={'number'} placeholder={'+79999999999'} className={'feedback__input'} type="phone" required={true}/>
                                </div>
                            </div>
                            <div className={'feedback__form-right'}>
                                <div className={'feedback__input-block'}>
                                    <p>Сообщение:</p>
                                    <textarea name={'text'} className={'feedback__textarea'} name="" id="" cols="30"
                                              rows="8"></textarea>
                                </div>
                                <div className={'feedback__input-block feedback__input-block--button'}>
                                    <button className={'feedback__button'}>
                                        Отправить
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
    );

}
