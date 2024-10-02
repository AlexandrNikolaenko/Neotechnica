import Image from "next/image"

export function NewsImage({img}) {
    return <Image alt='Фотография для новости' src={img} width={260} height={140}/>
}