import FileList from "@/app/components/rightFileList";
import { FileButton } from "@/app/components/buttons";

export default function Requisites () {
    return (
    <div className="grid gap-6 w-full wrapper-sep">
        <div className="z-40">
            <h1 className="text-dark-blue font-bold text-title">Реквизиты</h1>
            <div className="felx flex-col gap-y-2.5">
                <p className="text-minititle font-medium">Полное наименование организации: ООО «Неотехника»</p>
                <p className="text-minititle font-medium">Сокращенное наименование организации: ООО «Неотехника»</p>
                <p className="text-minititle font-medium">Юридический адрес: 634538, Томская обл, р-нТомский, Ул 4км (дорога Михайловка – Александровское тер.), строение № 3</p>
                <p className="text-minititle font-medium">Почтовый адрес: 634506 г. Томск, п. Светлый, 58а, а/я 129</p>
                <p className="text-minititle font-medium">Руководитель организации: Робенков Павел Викторович</p>
                <p className="text-minititle font-medium">Должность руководителя организации: Генеральный директор</p>
                <p className="text-minititle font-medium">Действует на основании: Устав организации</p>
                <p className="text-minititle font-medium">ОГРН 1127014001465</p>
                <p className="text-minititle font-medium">ИНН 7014056790</p>
                <p className="text-minititle font-medium">КПП 701401001</p>
                <p className="text-minititle font-medium">Наименование банка Новосибирский ф-л ОАО «АЛЬФА-БАНК» г. Новосибирск</p>
                <p className="text-minititle font-medium">Расч/счет: 40702810523010000331</p>
                <p className="text-minititle font-medium">Кор/счет: 30101810600000000774</p>
                <p className="text-minititle font-medium">БИК: 045004774</p>
                <p className="text-minititle font-medium">Главный бухгалтер: Бульченко Елена Викторовна</p>
                <p className="text-minititle font-medium">(382-2) 46-91-19 доб. 3163</p>
                <p className="text-minititle font-medium">(382-2) 46-91-20</p>
            </div>
        </div>
        <FileList>
            <FileButton link={'Карточка предприятия.doc (270kb)'}/>
        </FileList>
        <div className="absolute w-[731px] h-[518px] bottom-0 right-0 z-10" style={{backgroundImage: 'url(/requisitesFon.png)'}}></div>
    </div>
    )
}