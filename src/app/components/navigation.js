'use client'

import Link from "next/link";
import { BaseLink, OpenLink } from "./navLink";

export default function NavMenu ({activeBlock, activePage, setActivePoint}) {
    switch (activeBlock) {
        case 'about': {
            return (
                <ul className={`flex flex-col gap-y-5 sticky`}>
                    <li>
                        <BaseLink isActive={activePage == 'news'} url={'/about/news'} text={'Новости'} action={() => setActivePoint('news')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'history'} url={'/about/history'} text={'История'} action={() => setActivePoint('history')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'description'} url={'/about/description'} text={'Описание'} action={() => setActivePoint('description')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'competencies'} url={'/about/competencies'} text={'Наши компетенции'} action={() => setActivePoint('competencies')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'requisites'} url={'/about/requisites'} text={'Реквизиты'} action={() => setActivePoint('requisites')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'fiddback'} url={'/about/fiddback'} text={'Отзывы'} action={() => setActivePoint('fiddback')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'letters'} url={'/about/letters'} text={'Благодарственные письма'} action={() => setActivePoint('letters')}/>
                    </li>
                </ul>
            )
        };
        case 'prodation': {
            return (
                <ul className={`flex flex-col gap-y-5 h-[${window.innerHeight - 132}px] overflow-y-scroll`}>
                    <li>
                        <OpenLink isActive={activePage == 'bks'} text={'Блок-контейнерные системы'} url={'/prodaction/bks'} action={setActivePoint('bks')}/>
                    </li> 
                    <li>
                        <OpenLink isActive={activePage == 'bks'} text={'Блок-контейнерные системы'} url={'/prodaction/bks'} action={setActivePoint('bks')}/>
                    </li> 
                    <li>
                        <OpenLink isActive={activePage == 'bks'} text={'Блок-контейнерные системы'} url={'/prodaction/bks'} action={setActivePoint('bks')}/>
                    </li> 
                    <li>
                        <BaseLink isActive={activePage == 'letters'} url={'/about/letters'} text={'Благодарственные письма'} action={() => setActivePoint('letters')}/>
                    </li> 
                    <li>
                        <BaseLink isActive={activePage == 'letters'} url={'/about/letters'} text={'Благодарственные письма'} action={() => setActivePoint('letters')}/>
                    </li> 
                    <li>
                        <OpenLink isActive={activePage == 'bks'} text={'Блок-контейнерные системы'} url={'/prodaction/bks'} action={setActivePoint('bks')}/>
                    </li> 
                    <li>
                        <BaseLink isActive={activePage == 'letters'} url={'/about/letters'} text={'Благодарственные письма'} action={() => setActivePoint('letters')}/>
                    </li> 
                </ul>
            )
        };
        case 'career': {
            return (
                <ul className="flex flex-col gap-y-5">
                    <li>
                        <BaseLink isActive={activePage == 'vacantions'} url={'/career/vacancies'} text={'Вакансии'} action={() => setActivePoint('vacantions')}/>
                    </li>
                    <li>
                        <BaseLink isActive={activePage == 'conditions'} url={'/career/conditions'} text={'Условия работы'} action={() => setActivePoint('conditions')}/>
                    </li>
                </ul>
            )
        };
        case 'contacts': {
            return <></>
        }
    }
}

export function FooterTitleLink ({text, isLightColor}) {
    return (
        <p className={`${isLightColor ? 'text-white' : 'text-light-blue'}`}>{text}</p>
    )
}

export function FooterLink ({text, isLightColor, url}) {
    return (
        <Link className={`${isLightColor ? 'text-white' : 'text-light-blue'}`} href={url}>{text}</Link>
    )
}