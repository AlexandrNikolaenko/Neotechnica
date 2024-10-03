'use client'

import Logo from "./logo"
import Link from "next/link"

export default function Header ({activePage, action}){
    return (
        <header className="fixed w-full border-b-[1px] border-blue border-opacity-20 bg-white z-50">
            <div className="flex wrapper py-3 justify-between items-center">
                <Logo />
                <nav>
                    <ul className="flex gap-x-[76px]">
                        <li>{activePage == 'about' ? <Link className={'text-blue font-bold'} href={'/about'} onClick={action}>О компании</Link> : <Link className={'text-dark-blue font-bold'} href={'/about'} onClick={action}>О компании</Link>}</li>
                        <li>{activePage == 'prodaction' ? <Link className={'text-blue font-bold'} href={'/prodaction'} onClick={action}>Продукция и услуги</Link> : <Link className={'text-dark-blue font-bold'} href={'/prodaction'} onClick={action}>Продукция и услуги</Link>}</li>
                        <li>{activePage == 'career' ? <Link className={'text-blue font-bold'} href={'/career'} onClick={action}>Карьера</Link> : <Link className={'text-dark-blue font-bold'} href={'/career'} onClick={action}>Карьера</Link>}</li>
                        <li>{activePage == 'contacts' ? <Link className={'text-blue font-bold'} href={'/contacts'} onClick={action}>Контакты</Link> : <Link className={'text-dark-blue font-bold'} href={'/contacts'} onClick={action}>Контакты</Link>}</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}