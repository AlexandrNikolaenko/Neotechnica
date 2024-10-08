'use client'

import Header from "../components/header";
import NavMenu from "../components/navigation";
import { useState } from "react";

export default function ProdactionLayout ({children}) {
    let [activePoint, setActivePoint] = useState('def');

    return (
        <>
            <Header activePage={'prodaction'}/>
            <div className="wrapper grid wrapper-sep-r gap-6 pt-[132px] pb-20">
                <NavMenu activeBlock={'prodaction'} activePage={activePoint} setActivePoint={setActivePoint}/>
                {children}
            </div>
        </>
    )
}