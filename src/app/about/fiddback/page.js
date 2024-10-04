'use client'

import ListCertificate from "@/app/components/listCertificate";
import { useState } from "react";

export default function Fiddback () {
    const [list, setList] = useState([1, 2, 3])

    return (
    <div className="flex flex-col gap-y-6">
        <h1 className="text-dark-blue font-bold text-title">Отзывы наших клиентов</h1>
        <p className="text-base font-bold">Компания <span className="text-blue font-bold text-minititle">Неотехника</span> глубоко ценит отношения со своими партнерами и всегда готова к <span className="text-blue font-bold text-minititle">расширению сотрудничества.</span></p>
        <div className="grid grid-rows-2 grid-cols-5 w-full h-[390px] gap-3">
            <div className="w-full row-span-2 col-span-3 overflow-hidden"><div className="bg-cover bg-no-repeat bg-center hover:scale-105 w-full h-full duration-300 cursor-pointer" style={{backgroundImage: `url(/fiddback${list[0]}.jpg)`}}></div></div>
            <div className="w-full row-span-1 col-span-2 overflow-hidden"><button className="bg-cover bg-no-repeat bg-center hover:scale-105 w-full h-full duration-300" style={{backgroundImage: `url(/fiddback${list[1]}.jpg)`}} onClick={() => setList([list[1], list[2], list[0]])}></button></div>
            <div className="w-full row-span-1 col-span-2 overflow-hidden"><button className="bg-cover bg-no-repeat bg-center hover:scale-105 w-full h-full duration-300" style={{backgroundImage: `url(/fiddback${list[2]}.jpg)`}} onClick={() => setList([list[2], list[0], list[1]])}></button></div>
        </div>
        <ListCertificate name={'fiddbackCert'} start={1} end={13}/>
    </div>
    )
}