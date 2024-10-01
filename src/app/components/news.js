'use client'

import { useState } from "react"
import Image from "next/image"
import { BlobImage } from "./images"

export function OneNews({title, text, date, img}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={'w-full bg-contain bg-left-top'} style={{background: 'url(/left-up-corner.png)'}}>
            <div className={'w-full flex justify-between bg-contain bg-left-top py-7 px-12'} style={{background: 'url(/right-down-corner.png)'}}>
                <BlobImage img={img}/>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    <p className={`${isOpen ? 'line-clamp-none' : 'line-clamp-3'}`}>{text}</p>
                    <button className="flex" onClick={() => setIsOpen(!isOpen)}>
                        <p>{isOpen ? 'Скрыть' : 'Показать'}</p>
                        <Image src="arrow-dowm.svg" alt="arrow" width={19} height={19} className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}></Image>
                    </button>
                </div>
            </div>
        </div>
    )
}

export async function ListNews ({amount}) {
    return (
        <>
        </>
    )
}