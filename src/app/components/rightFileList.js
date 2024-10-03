export default function FileList({children}){
    return(
        <ul className={'flex flex-col gap-y-5 max-w-[211px] z-40'}>
            {children}
        </ul>
    )
}