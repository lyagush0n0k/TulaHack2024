import React from "react";
import MainLayout from "@/Layouts/MainLayout";

export default class Main extends React.Component {
    render() {
        return (
            <>
                <MainLayout>
                    <div className="wrapper container">
                        <div className="container__sections">
                            <div className="container__sections-left">

                            </div>
                            <div className="container__sections-right"></div>
                        </div>
                    </div>
                </MainLayout>
            </>
        );
    }
}
