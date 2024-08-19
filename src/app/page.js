import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import { BaseButton } from "./components/buttons";
import { News } from "./components/news";

export default function Home() {
  return (
    <>
      <Header activePage={'default'}/>
      <section className="wrapper flex flex-col gap-y-[83px] pt-[160px]">
        <div className="flex justify-between items-center">
          <div className="flex gap-y-7 flex-col">
            <h1>Вас приветствует компания <span>Неотехника!</span></h1>
            <p>Наша компания работает и развивается по принципам открытости и партнерства, приглашаем Вас узнать о нас больше.</p>
            <p>На нашем сайте представлена актуальная информация о деятельности, производимой продукции и услугах.</p>
          </div>
          <Image alt={'Участник проекта "Производительность.РФ"'} src={'/PartProject.png'} width={250} height={250}/>
        </div>
        <div className={'flex flex-col gap-5 items-end'}>
          <div className={'grid grid-cols-2'}>
            
          </div>
          <div className={'grid grid-cols-3'}>

          </div>
          <Link href={'/prodaction'}>Смотреть больше...</Link>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3>Новости</h3>
            <BaseButton text={'Все новости'} isLink={true} url={'/about/news'}/>
          </div>
          <div className={'flex flex-col gap-5'}>
            <News isLast={true}/>
            <News isPenult={true}/>
          </div>
        </div>
      </section>
    </>
  );
}
