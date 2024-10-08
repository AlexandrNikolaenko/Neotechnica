/* eslint-disable react/no-unescaped-entities */
import { ThreeImgBlock } from "@/app/components/condition"

export default function Vacancies () {
    return (
    <div className="flex flex-col gap-y-6">
        <h1 className="text-title text-dark-blue font-bold">Вакансии</h1>
        <ThreeImgBlock name={'vacancies'}/>
        <div className="flex flex-col gap-y-6">
            <p>Уважаемые соискатели! Компания "Неотехника" осуществляет подбор специалистов для работы на постоянной основе на следующие вакантные должности:</p>
            <p>Продолжается формирование Кадрового резерва компании, при заинтересованности в работе на нашем предприятии, высылайте Ваше Резюме и Анкету соискателя (форму связи с отделом кадров для отправки Резюме и Анкету соискателя Вы можете найти на странице "Карьера").</p>
            <p>При открытии новых вакансий, Ваша кандидатура будет рассмотрена.</p>
        </div>
    </div>
    )
}