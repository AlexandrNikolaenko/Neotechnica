'use client'

import Header from "../components/header";
import NavMenu from "../components/navMenu";
import { useState } from "react";

export default function AboutLayout ({children}) {
    let [activePoint, setActivePoint] = useState('def');

    return (
        <>
            <Header activePage={'about'} action={() => setActivePoint('about')}/>
            <div className="wrapper flex gap-6 pt-[132px]">
                <NavMenu activeBlock={'about'} activePage={activePoint} setActivePoint={setActivePoint}/>
                {children}
            </div>
        </>
    )
}