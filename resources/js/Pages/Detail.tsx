import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import {Link} from "@inertiajs/react";
// @ts-ignore
import Arrow from '../../../public/img/left-arrow.svg?react';
import '../../less/common.blocks/detail/detail.less';

export default class Detail extends React.Component {
    render() {
        return (
            <>
                <MainLayout>
                    <div className={'container'}>
                        <div className={'container__sections-left'}>
                            <div className={'detail'}>
                                <div className={'detail__header'}>
                                    <Link className={'detail__back'} href={route('main')}>
                                        <Arrow/>
                                        <span>Назад</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </MainLayout>
            </>
        );
    }
}
