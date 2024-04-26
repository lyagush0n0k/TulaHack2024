import React, { PropsWithChildren, ReactNode } from 'react';
import Header from "@/Components/header";
import Footer from "@/Components/footer";

export default function MainLayout({ children }: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>
    );
}
