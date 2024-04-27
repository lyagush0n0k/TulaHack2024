import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export default function Table({children}: IProps) {
    return(
        <table className='min-w-full text-left text-sm font-light'>
            {children}
        </table>
    );
}
