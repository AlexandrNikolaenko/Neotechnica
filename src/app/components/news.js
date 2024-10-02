'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { NewsImage } from "./images"
import { host } from "./host"

export function OneNews({title, text, date, img}) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(text);

    return (
        <div className={'w-full bg-auto bg-left-top bg-no-repeat'} style={{backgroundImage: 'url(/left-up-corner.png)'}}>
            <div className={'flex gap-7 items-center justify-between bg-auto bg-right-bottom py-7 px-12 bg-no-repeat'} style={{backgroundImage: 'url(/right-down-corner.png)'}}>
                <div className="w-[260px] h-auto">
                    <Image alt='Фотография для новости' src={img} width={260} height={140}/>
                </div>
                <div className="max-w-[708px]">
                    <p className="text-base font-bold text-dark-blue">{date}</p>
                    <h3 className="text-subtitle font-bold text-dark-blue">{title}</h3>
                    <p className={`${isOpen ? 'line-clamp-none' : 'line-clamp-3'} text-base text-dark-blue`}>{text}</p>
                    <button className="flex items-center" onClick={() => {console.log(!isOpen); setIsOpen(!isOpen)}}>
                        <p className="text-base font-bold text-blue">{isOpen ? 'Скрыть' : 'Показать'}</p>
                        <Image src="/arrow-down.svg" alt="arrow" width={19} height={19} className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}></Image>
                    </button>
                </div>
            </div>
        </div>
    )
}

export function ListNews ({start, end}) {
    const [list, setList] = useState([])

    useEffect(() => {
        async function getData() {
            await fetch(`http://${host}:5000/getnews?start=${start}&end=${end}`, {method: 'GET'})
                .then(res => res.json())
                .then(data => {if (list.length == 0) setList(data)})
        };
        getData()
    });

    return (
        <div className="flex flex-col gap-y-5 pb-5">
            {list.map(elem => <OneNews key={elem.id} title={elem.title} text={elem.text} date={elem.date} img={`/news/${elem.imgName}`}/>)}
        </div>
    )
}