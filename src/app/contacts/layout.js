import Header from "../components/header"

export default function ContactsLayout ({children}) {
    return (
        <>
            <Header activePage={'contacts'}/>
            <div className="wrapper pt-[132px] pb-20">
                {children}
            </div>
        </>
    )
}