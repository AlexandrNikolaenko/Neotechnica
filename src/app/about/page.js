import Image from "next/image";
import { FileButton } from "../components/buttons";

export default function About() {
    return (
        <div className="grid gap-6 w-full wrapper-sep">
            <div className={'flex gap-y-5 flex-col items-center'}>
                <h1 className="w-full text-title text-dark-blue font-bold">О компании</h1>
                <p className="text-base text-dark-blue">Компания «Неотехника» создана на базе обособленного производственного подразделения компании «Синтек» (ООО «Синтек», г. Нижний Новгород) в г. Томске, функционирующего с 2010 г.</p>
                <Image src={'/blueRussia.jpg'} alt={'blueRussia'} width={440} height={211}/>
                <p className="text-base text-dark-blue">Потенциал предприятия ориентирован на создание различных систем на базе блок-контейнеров, выпуск комплектных электростанций, шкафного и приборного оборудования, включая разработку, производство, внедрение и сервис изготавливаемой продукции.</p>
                <p className="text-base text-dark-blue">Производимые предприятием комплексные решения предназначены для обеспечения автоматизации технологических процессов в различных отраслях промышленности, в том числе на объектах трубопроводного транспорта нефти и нефтепродуктов, нефтегазовой промышленности, химических производств и энергетики.</p>
                <Image src={'/about-photo.jpg'} alt={'Our production'} width={440} height={211}/>
                <p className="text-base text-dark-blue">Основная доля продукции компании поставляется промышленным предприятиям, а так же фирмам интеграторам, работающим в сфере автоматизации.</p>
            </div>
            <ul className={'flex flex-col gap-y-5 max-w-[211px]'}>
                <Image src={'/cert-about.jpg'} width={211} height={283} alt="Certificate"/>
                <FileButton link={'Презентация_ Неотехника.pdf'}/>
                <FileButton link={'Сертификат соответствия ГОСТ Р ИСО 9001-2015.pdf (1809kb)'}/>
                <FileButton link={'Политика в области качества .pdf (462kb)'}/>
                <FileButton link={'Свидетельство кластера ИТ и электроника Томской области .jpg (252kb)'}/>
                <FileButton link={'Свидетельство Томской торгово-промышленной палаты.jpg (438kb)'}/>
            </ul>
        </div>
    )
}