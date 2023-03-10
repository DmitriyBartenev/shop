import React, { useRef } from 'react';


interface Person {
    age: number,
    name: string
}

interface HeaderProps {
    i?: number,
    title?: string,
    is?: boolean,
    foo?: (price: number) => string,
    person?: Person
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Header: React.FC<HeaderProps> = ({title}) => {

    const headerRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return(
        <header
            ref={headerRef} 
            className="w-full h-12 bg-blue-500">
            <div
                ref={divRef} 
                className="flex h-full py-2 px-8 justify-center items-center text-white">
                <p>{title}</p>
            </div>
            
        </header> 
    )
}
