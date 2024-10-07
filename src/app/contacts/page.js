import Image from "next/image";
import { host } from "../components/host";
import YandexMap from "../components/map";

export default function Contacts () {
    return (
        <div className="flex flex-col gap-y-6">
            <h1 className="text-title font-bold text-dark-blue">Контакты</h1>
            <div className="grid grid-cols-2 gap-5 w-full">
                <div className="flex flex-col gap-y-5">
                    <h5>Полное наименование</h5>
                    <p className="text-minititle text-dark">Общество с ограниченной ответственностью «Неотехника»</p>
                </div>
                <div className="flex flex-col gap-y-5">
                    <h5>Почтовый адрес</h5>
                    <p className="text-minititle text-dark">634506 г. Томск, п. Светлый, 58а, а/я 129</p>
                </div>
            </div>
            <AllContactsBlock/>
            <h5 className="text-minititle">Место нахождения (юридический адрес)</h5>
            <p className="text-base">634538, Томская область, р-н Томский, Ул 4 км (дорога Михайловка - Александровское тер.), строение № 3</p>
            <h5 className="text-minititle">Режим работы</h5>
            <p className="text-base">Понедельник-четверг 8:00-17:00, пятница 8:00-16:00. Обед 12:00-13:00. Выходные: суббота, воскресенье.</p>
            <div className="w-full ratio-contacts bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(/ContactsMap.jpg)'}}></div>
            <YandexMap />
        </div>
    )
}

async function AllContactsBlock() {
    let list;
    // let list = [{id: 1, img: 'RobenkoPV.jpg', post: 'Генеральный директор', name: 'Робенков Павел Викторович', email: 'robenkov.pavel@neotechnica.ru', phone: '+7 (382-2) 46-91-19', addit: '3150 (приемная)', mob: null }]

    await fetch(`http://${host}:5000/getcontacts/`, {method: 'GET'})
        .then(res => res.json())
        .then(data => list = data);

    return (
        <div className="flex flex-col gap-y-5">
            {list.map(person => <ContactBlock key={person.id} img={person.img} post={person.post} name={person.name} email={person.email} phone={person.phone} addit={person.addit} mob={person.mob}/>)}
        </div>
    )
}

function ContactBlock({img, post, name, email, phone, addit, mob}) {
    return (
        <div className="bg-gradient-to-r from-blue to-light-blue p-7 grid-contact">
            <Image src={`/${img}`} alt="Photo" width={450} height={300}/>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-y-4 items-end">
                    <h3 className="text-subtitle text-dark-blue font-bold">{post}</h3>
                    <p className="text-minititle">{name}</p>
                </div>
                <div className="flex flex-col gap-y-4 items-end">
                    <p className="text-base">e-mail: {email}</p>
                    <p className="text-base">{mob ? `тел. ${phone}, доп. ${addit}, моб. ${mob}`: `тел. ${phone}, доп. ${addit}`}</p>
                </div>
            </div>
        </div>
    )
}