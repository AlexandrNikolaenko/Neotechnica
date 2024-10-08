'use client'

import Image from "next/image"
import { useState } from "react"

export default function Condition({title, text}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col gap-y-4 p-7 bg-gradient-to-r from-light-blue to-blue">
            <div className="flex justify-between items-center">
                <h4 className="text-dark-blue text-subtitle font-bold">{title}</h4>
                <button className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-200`} onClick={() => setIsOpen(!isOpen)}>
                    <Image src={'/arrow-open-close.svg'} alt="Arrow" width={30} height={30}/>
                </button>
            </div>
            <p className={`text-base ${isOpen ? 'block' : 'none'}`}>{text}</p>
        </div>
    )
}

export function ThreeImgBlock({name}) {
    const [list, setList] = useState([1, 2, 3])

    return (
        <div className="grid grid-cols-3 grid-rows-2 w-full h-[546px] gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden">
                <button className="w-full h-full bg-cover bg-no-repeat bg-center hover:scale-105 duration-200" style={{backgroundImage: `url(/${name}${list[0]}.jpg)`}}></button>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <button className="w-full h-full bg-cover bg-no-repeat bg-center hover:scale-105 duration-200" style={{backgroundImage: `url(/${name}${list[1]}.jpg)`}} onClick={() => setList([list[1], list[2], list[0]])}></button>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <button className="w-full h-full bg-cover bg-no-repeat bg-center hover:scale-105 duration-200" style={{backgroundImage: `url(/${name}${list[2]}.jpg)`}} onClick={() => setList([list[2], list[0], list[1]])}></button>
            </div>
        </div>
    )
}