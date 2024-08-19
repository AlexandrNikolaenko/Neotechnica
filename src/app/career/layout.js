'use client'

import Header from "../components/header";
import NavMenu from "../components/navigation";
import { useState } from "react";

export default function CareerLayout ({children}) {
    let [activePoint, setActivePoint] = useState('def');

    return (
        <>
            <Header activePage={'career'} action={() => setActivePoint('career')}/>
            <div className="wrapper flex gap-6 pt-[132px] pb-20">
                <NavMenu activeBlock={'career'} activePage={activePoint} setActivePoint={setActivePoint}/>
                {children}
            </div>
        </>
    )
}