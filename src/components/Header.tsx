import React, { useState, useRef } from 'react';

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

interface TextNode {
    text: string
}


export const Header: React.FC<HeaderProps> = ({title, handleChange}) => {

    const [count, setCount] = useState<TextNode>({ text: 'Hello World!' });
    const [value, setValue] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    
    return(
        <header className="w-full h-12 bg-blue-500">
            <div
                ref={divRef} 
                className="flex h-full py-2 px-8 justify-end items-center text-white">
                <p className="cursor-pointer">{title}</p>
                <input 
                    type='text'
                    ref={inputRef}
                    value={value} 
                    onChange={handleChange}/>
            </div>
        </header>
    )
}
