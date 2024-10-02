import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import { BaseButton } from "./components/buttons";
import { ListNews } from "./components/news";

export default function Home() {
  return (
    <>
      <Header activePage={'default'}/>
      <section className="wrapper flex flex-col gap-y-[83px] pt-[160px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-y-7 flex-col">
            <h1 className="text-title font-bold text-dark-blue">Вас приветствует компания <span className="text-nametitle font-bold text-blue">Неотехника!</span></h1>
            <p className="text-subtitle text-dark-blue">Наша компания работает и развивается по принципам открытости и партнерства, приглашаем Вас узнать о нас больше.</p>
            <p className="text-subtitle text-dark-blue">На нашем сайте представлена актуальная информация о деятельности, производимой продукции и услугах.</p>
          </div>
          <Image alt={'Участник проекта "Производительность.РФ"'} src={'/PartProject.png'} width={250} height={250}/>
        </div>
        <div className={'flex flex-col gap-5 items-end'}>
          <div className={'grid grid-cols-2'}>
            
          </div>
          <div className={'grid grid-cols-3'}>

          </div>
          <Link href={'/prodaction'} className="text-minititle text-dark-blue">Смотреть больше...</Link>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-title font-bold text-dark-blue">Новости</h3>
            <BaseButton text={'Все новости'} isLink={true} url={'/about/news'}/>
          </div>
          <ListNews start={1} end={2}/>
        </div>
      </section>
    </>
  );
}
