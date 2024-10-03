'use client'

import { ListNews } from "@/app/components/news";
import { useState, useEffect } from "react";
import { host } from "@/app/components/host";

export default function News () {
    const [frame, setFrame] = useState({start: 1, end: 5});
    const [pagesAmount, setPagesAmount] = useState(0);
    const [activePart, setActivePart] = useState(1);
    

    useEffect(() => {
        async function getData() {
            await fetch(`http://${host}:5000/getamountnews`, {method: 'GET'})
                .then(res => res.json())
                .then(data => {if (pagesAmount == 0) setPagesAmount(Math.ceil(data.amount / (frame.end - frame.start + 1)))})
        };
        getData();
    })
    

    return (
    <div className="flex flex-col gap-y-5">
        <h1 className="text-title font-bold text-dark-blue">Новости</h1>
        <ListNews start={frame.start} end={frame.end}/>
        <NumdPart activePart={activePart} changeFrame={(arg) => setFrame(arg)} changePart={(part) => setActivePart(part)} amount={pagesAmount} delta={1 + frame.end - frame.start} frame={frame}/>
    </div>
    )
}

function NumdPart({changeFrame, changePart, activePart, amount, delta, frame}) {
    let list = [];

    if (amount != 0) {
        for (let i = activePart; i <= amount; i++) {
            list.push(i);
        }
    }

    return (
        <div className="flex items-end self-center">
            {list.map(number => <NumButton key={number} number={number} activePart={activePart} changeFrame={changeFrame} changePart={changePart} delta={delta} frame={frame}/>)}
        </div>
    )
}

function NumButton({activePart, number, changeFrame, changePart, delta, frame}) {
    if (Math.abs(activePart - number) == 1 || Math.abs(activePart - number) == 2) {
        return (
            <div>
                <button className="text-dark-blue font-bold text-sm" onClick={() => {
                    changeFrame({start: frame.start + (number - activePart) * delta, end: frame.end + (number - activePart) * delta});
                    changePart(number);
                }}>{number}</button>
            </div>
        )
    } else if (Math.abs(activePart - number) == 0) {
        return (
            <div>
                <button className="text-blue font-bold text-base" onClick={() => {
                    changeFrame({start: frame.start, end: frame.end});
                    changePart(number);
                }}>{number}</button>
            </div>
        )
    } else {
        return (
            <div className="hidden">
                <button>{number}</button>
            </div>
        )
    }
}