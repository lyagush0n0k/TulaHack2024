import React, {PropsWithChildren, ReactNode} from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function MainLayout({children}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <>
            <div className="canvas">
                <Header/>
                <main className={'main'}>{children}</main>
            </div>
            <Footer/>
        </>
    );
}
