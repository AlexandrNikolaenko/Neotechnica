import Image from "next/image"
import Link from "next/link"

export default function Logo(){
    return (
        <Link href={'/'} className="flex gap-1.5 items-start">
            <Image alt="Logo" src={'/Logo.svg'} width={28} height={28}/>
            <h2 className="text-xl font-bold text-blue">неотехника</h2>
        </Link>
    )
}