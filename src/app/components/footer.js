import { FooterTitleLink, FooterLink } from "./navigation"

export default function Footer() {
    return (
        <footer className={'bg-blue relative'}>
            <div className={'wrapper z-20 relative'}>
                <div className="flex justify-between py-5">
                    <div className={'flex flex-col gap-y-2.5'}>
                        <FooterTitleLink text={'О компании'} isLightColor={true} url={'/about'}/>
                        <FooterLink text={'История'} isLightColor={true} url={'/about/history'}/>
                        <FooterLink text={'Описание'} isLightColor={true} url={'/about/description'}/>
                        <FooterLink text={'Наши компетиции'} isLightColor={true} url={'/about/competencies'}/>
                        <FooterLink text={'Реквизиты'} isLightColor={true} url={'/about/requisites'}/>
                        <FooterLink text={'Новости'} isLightColor={true} url={'/about/news'}/>
                        <FooterLink text={'Отзывы'} isLightColor={true} url={'/about/letters'}/>
                    </div>
                    <div className={'flex flex-col gap-y-2.5 max-w-[232px]'}>
                        <FooterTitleLink text={'Продукция и услуги'} isLightColor={false} url={'/prodaction'}/>
                        <FooterLink text={'Блок-контейнерные системы'} isLightColor={false} url={'/about/history'}/>
                        <FooterLink text={'Дизельные газопоршневые электростанции'} isLightColor={false} url={'/about/description'}/>
                        <FooterLink text={'Приборное оборудование'} isLightColor={false} url={'/about/competencies'}/>
                    </div>
                    <div className={'flex flex-col gap-y-2.5 max-w-[232px]'}>
                        <FooterTitleLink text={'Контакты'} isLightColor={false} url={'/contacts'} />
                        <FooterLink text={'Телефон: +7 (382-2) 46-91-19'} isLightColor={false} url={'tel:+73822469119'}/>
                        <FooterLink text={'Email: info@neotechnica.ru'} isLightColor={false} url={'mailto:info@neotechnica.ru'}/>
                        <FooterLink text={'Адрес: 634538, Томская область, р-н Томский, Ул 4км (дорога Михайловка-Александровское тер.), строение №3'} isLightColor={false} url={'https://yandex.ru/maps/org/neotekhnika/170284041717/?ll=85.136039%2C56.581227&mode=search&sctx=ZAAAAAgBEAAaKAoSCQlSKXY0SFVAEQVu3c1TRUxAEhIJ6%2F6xEB1C%2FT8RbhXEQNe%2B4j8iBgABAgMEBSgKOABAvo8GSAFiHnJlbGV2X3NlcnZpY2VfYXJlYV9wZXJjZW50PTEwMGoCcnWdAc3MTD2gAQCoAQC9ARGTPKHCAQyWuKyJ%2BAH1i%2BGt%2BgSCAgtuZW90ZWNobmljYYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=85.136039%2C56.581227&sspn=0.013561%2C0.006834&text=neotechnica&z=16.08'}/>
                    </div>
                </div>
            </div>
            <div className={'bg-contain h-full w-full absolute right-0 top-0 bg-no-repeat bg-right-bottom z-10'} style={{backgroundImage: 'url(/FooterFon.svg)'}}></div>
        </footer>
    )
}