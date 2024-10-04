export default function ListCertificate ({name, start, end}) {
    let list = [];

    for(let i = start; i <= end; i++){
        list.push(i);
    }

    return (
        <div className="grid grid-cols-3 w-full gap-3 h-[530px] overflow-y-scroll">
            {list.map(n => {
                return (
                    <button key={n} className="h-[464px] w-[320px] bg-cover bg-no-repeat bg-center bord_frame" style={{backgroundImage: `url(/${name}${n}.jpg)`}}></button>
                )
            })}
        </div>
    )
}