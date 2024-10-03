import Link from "next/link";

export function BaseButton({text, isLink, url, action}){
    return (
        <>
            {isLink ? <Link href={url} className="flex items-center text-minititle text-dark-blue font-bold bg-cover bg-no-repeat py-[14px] px-[53px] h-[51px] w-[229px] align-text-top" style={{backgroundImage: 'url(/buttonFon.svg)'}}><span className="align-top">{text}</span></Link> : <button onClick={action()} className="text-minititle text-dark-blue font-bold bg-contain bg-no-repeat py-[13px] px-[52px]" style={{backgroundImage: 'url(/buttonFon.svg)'}}><span className="align-top">{text}</span></button>}
        </>
    )
}

export function FileButton({link}) {
    return (
        <button className="px-3 py-2.5 bg-light-blue text-xs">{link}</button>
    )
}