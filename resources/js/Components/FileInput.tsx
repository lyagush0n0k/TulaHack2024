import { forwardRef, useRef, InputHTMLAttributes } from 'react';

export default forwardRef(function FileInput(
    { type = 'file', className = '', ...props }: InputHTMLAttributes<HTMLInputElement>,
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    return (
        <input
            {...props}
            type={type}
            className={
                'file:bg-gray-800 border h-[41.6px] focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ' +
                'file:border-none file:mr-3 file:rounded-none rounded-md ' +
                'file:h-full shadow-sm file:px-4 file:font-semibold file:text-xs ' +
                'file:text-white file:uppercase file:tracking-widest file:hover:bg-gray-700 file:focus:bg-gray-700 ' +
                'file:active:bg-gray-900 focus:ring-[1px] ' +
                'file:focus:ring-offset-2 file:transition file:ease-in-out file:duration-150 ' +
                className
            }
            ref={localRef}
        />
    );
});
