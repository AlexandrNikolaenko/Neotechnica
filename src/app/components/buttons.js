import Link from "next/link";

export function BaseButton({text, isLink, url, action}){
    return (
        <>
            {isLink ? <Link href={url}>{text}</Link> : <button onClick={action()}>{text}</button>}
        </>
    )
}