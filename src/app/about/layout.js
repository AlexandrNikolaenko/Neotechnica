'use client'

import Header from "../components/header";
import NavMenu from "../components/navigation";
import { useState } from "react";

export default function AboutLayout ({children}) {
    let [activePoint, setActivePoint] = useState('def');

    return (
        <>
            <Header activePage={'about'} action={() => setActivePoint('about')}/>
            <div className="wrapper grid wrapper-sep-r gap-6 pt-[132px] pb-20">
                <NavMenu activeBlock={'about'} activePage={activePoint} setActivePoint={setActivePoint}/>
                {children}
            </div>
        </>
    )
}