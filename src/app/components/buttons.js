import Link from "next/link";

export function BaseButton({text, isLink, url, action}){
    return (
        <>
            {isLink ? <Link href={url} className="text-minititle text-dark-blue">{text}</Link> : <button onClick={action()} className="text-minititle text-dark-blue">{text}</button>}
        </>
    )
}