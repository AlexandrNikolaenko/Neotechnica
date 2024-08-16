'use client'

import Link from "next/link";
import { useState } from "react";

export function BaseLink ({isActive, text, url}) {
    return (
        <>
            {isActive ? <Link href={url}>{text}</Link> : <Link href={url}>{text}</Link>}
        </>
    )
}

function MiniLink ({isActive, text, url}) {
    return (
        <>
            {isActive ? <Link href={url}>{text}</Link> : <Link href={url}>{text}</Link>}
        </>
    )
}

export function OpenLink ({isActive, text, url, isDefaultOpen, linkChildren}) {
    let [isOpen, setIsOpen] = useState(isDefaultOpen);

    return (
        <div>
            <div className="flex w-full justify-between">
                <BaseLink isActive={isActive} text={text} url={url}/>
                <button onClick={() => setIsOpen(!isOpen)}>
                    
                </button>
            </div>
            <ul>
                {linkChildren.map(elem => <li key={elem.key}><MiniLink isActive={elem.isActive} text={elem.text} url={elem.url}/></li>)}
            </ul>
        </div>
    )
}