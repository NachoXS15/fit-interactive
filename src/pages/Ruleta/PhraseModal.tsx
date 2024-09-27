type Modal = {
    isOpen: boolean
    content: React.ReactNode
}

export default function PhraseModal({ isOpen, content }: Modal) {
    if (!isOpen) return null

    return (
        <>
            <div
                className="w-5/6 h-[650px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
                style={{backgroundImage: 'url("/assets/bg_ruleta.png")'}}
            >
                <div className="h-full bg-cover bg-center flex flex-col pl-36 text-white bg-black bg-opacity-20">
                    {content}
                    
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
