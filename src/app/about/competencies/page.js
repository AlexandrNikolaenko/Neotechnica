'use client'

import Image from "next/image"

export default function Competencies () {
    // window.onload = function () {
    //     setTimeout(function () {
    //         let elem = document.getElementById('flex');
    //         console.log(elem.classList)
    //         elem.classList.remove('flex');
    //         elem.classList.add('none');
    //     }, 10000);
    //     };
    return (
    <div className="flex flex-col gap-y-6">
        <h1 className="text-title font-bold text-dark-blue">Наши компетенции</h1>
        <div className="grid grid-cols-6 grid-rows-7 h-[805px] w-full relative gap-3 px-[1px]">
            <BlockImg size={2} number={1}/>
            <BlockImg size={2} number={2}/>
            <BlockImg size={2} number={3}/>
            <BlockImg size={3} number={4}/>
            <BlockImg size={3} number={5}/>
            <BlockImg size={2} number={6}/>
            <BlockImg size={2} number={7}/>
            <BlockImg size={2} number={8}/>
            <div className="absolute h-full w-full flex items-center justify-center bg-white hide-anim overflow-hidden" id='flex' onLoad={() => {
                console.log('here')
                setTimeout(function () {
                    let elem = document.getElementById('flex');
                    console.log(elem.classList)
                    elem.classList.remove('flex');
                    elem.classList.add('none');
                }, 1000);
                }}>
                <div className="flex items-end gap-x-4 hide-anim">
                    <Image src={'/Logo.svg'} alt="Logo" width={68} height={68}/>
                    <h2 className="text-title text-blue font-bold">неотехника</h2>
                </div>
            </div>
        </div>
    </div>
    )
}

function BlockImg({size, number}) {
    return (
        <div className={`col-span-${size} row-span-${size} overflow-hidden`}>
            <div className="hover:scale-105 w-full h-full bg-cover bg-no-repeat bg-center duration-300" style={{backgroundImage: `url(/compet${number}.jpg)`}}></div>
        </div>
    )
}