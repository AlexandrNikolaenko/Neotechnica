'use client'

import { useState } from "react";

function OneceImage ({name, index, change}) {
    return (
        <button className="w-full h-full bg-cover bg-no-repeat bg-center hover:scale-105 duration-200" style={{backgroundImage: `url(/${name}${index}.jpg)`}} onClick={() => change()}></button>
    )
}

export function ThreeImgBlock({name}) {
    const [list, setList] = useState([1, 2, 3]);

    return (
        <div className="grid grid-cols-3 grid-rows-2 w-full h-[546px] gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden">
                <OneceImage name={name} index={list[0]} change={() => setList(list)}/>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[1], list[2], list[0]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[2]} change={() => setList([list[2], list[0], list[1]])}/>
            </div>
        </div>
    )
}

export function FiveImgBlock({name}) {
    const [list, setList] = useState([1, 2, 3, 4, 5]);

    return (
        <div className="grid grid-cols-6 grid-rows-3 w-full h-[546px] gap-4">
            <div className="col-span-3 row-span-2 overflow-hidden">
                <OneceImage name={name} index={list[0]} change={() => setList(list)}/>
            </div>
            <div className="col-span-3 row-span-2 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[1], list[2], list[3], list[4], list[0]])} />
            </div>
            <div className="col-span-2 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[2]} change={() => setList([list[2], list[3], list[4], list[0], list[1]])}/>
            </div>
            <div className="col-span-2 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[3]} change={() => setList([list[3], list[4], list[0], list[1], list[2]])}/>
            </div>
            <div className="col-span-2 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[4]} change={() => setList([list[4], list[0], list[1], list[2], list[3]])}/>
            </div>
        </div>
    )
}

export function SixImgBlock({name}) {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <div className="grid grid-cols-3 grid-rows-3 w-full h-[470px] gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden">
                <OneceImage name={name} index={list[0]} change={() => setList(list)}/>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[1], list[2], list[3], list[4], list[5], list[0]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[2], list[3], list[4], list[5], list[0], list[1]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[3], list[4], list[5], list[0], list[1], list[2]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[4], list[5], list[0], list[1], list[2], list[3]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[5], list[0], list[1], list[2], list[3], list[4]])} />
            </div>

        </div>
    )
}

export function SevenImgBlock({name}) {
    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7]);

    return (
        <div className="grid grid-cols-4 grid-rows-3 w-full h-[470px] gap-4">
            <div className="col-span-3 row-span-2 overflow-hidden">
                <OneceImage name={name} index={list[0]} change={() => setList(list)}/>
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[1], list[2], list[3], list[4], list[5], list[6], list[0]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[2], list[3], list[4], list[5], list[6], list[0], list[1]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[3], list[4], list[5], list[6], list[0], list[1], list[2]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[4], list[5], list[6], list[0], list[1], list[2], list[3]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[5], list[6], list[0], list[1], list[2], list[3], list[4]])} />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
                <OneceImage name={name} index={list[1]} change={() => setList([list[6], list[0], list[1], list[2], list[3], list[4], list[5]])} />
            </div>
        </div>
    )
}