'use client'

export default function PhotoLinks() {
    return (
        <div className="grid grid-cols-6 grid-rows-5  h-[638px] w-full gap-5">
            <button className="col-span-3 row-span-3 overflow-hidden relative">
                {/* <div className="absolute w-full h-full top-0 bg-opacity-0 active:bg-opacity-100"><div id='1' onClick={() => console.log('and here')} className="translate-x-full text-blue text-minititle font-bold hover:translate-x-0 active:translate-x-0 focus:translate-x-0">Комплектные электростанции в цельнометаллических блок-контейнерах</div></div> */}
                <div className="bg-cover bg-no-repeat bg-center w-full h-full hover:scale-105 duration-300" style={{backgroundImage: 'url(mainPhoto1.jpg)'}}></div>
            </button>
            <div className="col-span-3 row-span-3 overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-full h-full hover:scale-105 duration-300" style={{backgroundImage: 'url(mainPhoto2.jpg)'}}></div>
            </div>
            <div className="col-span-2 row-span-2 overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-full h-full hover:scale-105 duration-300" style={{backgroundImage: 'url(mainPhoto3.jpg)'}}></div>
            </div>
            <div className="col-span-2 row-span-2 overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-full h-full hover:scale-105 duration-300" style={{backgroundImage: 'url(mainPhoto4.jpg)'}}></div>
            </div>
            <div className="col-span-2 row-span-2 overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-full h-full hover:scale-105 duration-300" style={{backgroundImage: 'url(mainPhoto5.jpg)'}}></div>
            </div>
        </div>
    )
}