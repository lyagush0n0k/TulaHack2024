import React, { useState, PropsWithChildren, ReactNode } from 'react';
import { User } from '@/types';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function MainLayout({ user, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    return (
        <>
            <div className="canvas">
                <Header auth={user} />
                <main className={'main'}>{children}</main>
            </div>
            <Footer />
        </>
    );
}
