import React from "react";

// @ts-ignore
import Location from "../../../public/img/location.svg?react"
export default function RightBlock() {
    return (
        <div className="container__sections-right">
            <div className="wrapper">
                <div className="discount">
                    Скидка 5% при бронировании ресторана Тула в кубе
                </div>
                <div className="available-places">
                    <h2>Доступные места</h2>
                    <div className="address">
                        <Location/>
                        <span>г. Тула, ул. Советская, 11</span>
                    </div>
                    <div className="address">
                        <Location/>
                        <span>г. Тула, проспект Ленина, 85, к. 1, вход 5</span>
                    </div>
                    <div className="address">
                        <Location/>
                        <span>г. Тула, ул. Октябрьская, 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
