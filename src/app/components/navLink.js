'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function BaseLink ({isActive, text, url, action}) {
    return (
        <>
            <Link className={`${isActive ? 'text-blue' : 'text-dark-blue'} font-bold`} href={url} onClick={action}>{text}</Link>
        </>
    )
}

function MiniLink ({isActive, text, url, action}) {
    return (
        <>
            <Link className={`${isActive ? 'text-blue' : 'text-dark-blue'} font-bold`} href={url} onClick={action}>{text}</Link>
        </>
    )
}

export function OpenLink ({isActive, text, url, isDefaultOpen, linkChildren, action}) {
    let [isOpen, setIsOpen] = useState(isDefaultOpen);

    return (
        <div>
            <div className="flex w-full justify-between">
                <BaseLink isActive={isActive} text={text} url={url} action={action}/>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Image alt="arrow" src={'/Arrow.svg'}/>
                </button>
            </div>
            <ul className={`${isOpen ? 'block' : 'none'}`}>
                {linkChildren.map(elem => <li key={elem.key}><MiniLink isActive={elem.isActive} text={elem.text} url={elem.url}/></li>)}
            </ul>
        </div>
    )
}