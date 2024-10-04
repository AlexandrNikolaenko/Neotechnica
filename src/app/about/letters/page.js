import ListCertificate from "@/app/components/listCertificate"

export default function Letters () {
    return (
    <div className="flex flex-col gap-y-6">
        <h1 className="text-dark-blue font-bold text-title">Благодарственные письма</h1>
        <h5 className="text-dark-blue">Благодарственные письма наших партнеров</h5>
        <ListCertificate name={'Letters'} start={1} end={9}/>
    </div>
    )
}