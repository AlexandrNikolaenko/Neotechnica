'use client'

import { BaseButton } from "./buttons";
import { use, useState } from "react";

export default function ListCertificate ({name, start, end}) {
    const [isOpen, setIsOpen] = useState(false)
    let list = [];

    for(let i = start; i <= end; i++){
        list.push(i);
    }

    return (
        <div className={`${isOpen ? 'h-auto flex flex-col gap-y-4' : 'h-[530px]'} overflow-y-hidden w-full relative transition-all duration-200`}>
            <div className="grid grid-cols-3 w-full gap-3">
                {list.map(n => {
                    return (
                        <button key={n} className="h-[464px] w-full bg-cover bg-no-repeat bg-center bord_frame" style={{backgroundImage: `url(/${name}${n}.jpg)`}}></button>
                    )
                })}
            </div>
            <div className={`${isOpen ? '' : "absolute bottom-0 w-full button-blue-bg pt-32"} flex justify-center`}>
                <BaseButton text={isOpen ? 'Скрыть' : 'Показать'} isLink={false} action={() => setIsOpen(!isOpen)}/>
            </div>
        </div>
    )
}