import Condition from "@/app/components/condition";
import { ThreeImgBlock } from "@/app/components/condition";
import { host } from "@/app/components/host";

export default async function Conditions () {
    let conditions = [];

    await fetch(`http://${host}:5000/getconditions`, {method: 'GET'})
        .then(res => res.json())
        .then(data => conditions = data);

    return (
    <div className="flex flex-col gap-y-6">
        <h1 className="text-title text-dark-blue font-bold">Условия работы</h1>
        <ThreeImgBlock name={'conditions'}/>
        {conditions.map(cond => <Condition key={cond.id} title={cond.title} text={cond.text}/>)}
    </div>
    )
}
