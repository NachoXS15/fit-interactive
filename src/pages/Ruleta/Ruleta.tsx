import { useState } from "react";
import '../../ruleta.css'
import ruleta from '../../../public/assets/RULETA.webp'
import {Category, categories, categoryContent} from "../../config/SpinCategories";
import PhraseModal from "./PhraseModal";
import { useNavigate } from "react-router-dom";
export default function Ruleta() {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isSpinning, setIsSpinning] = useState(false);
    const navigate = useNavigate();

    const handleSpin = () => {
        setIsSpinning(true);
        setTimeout(() => {
            const randomCategoryIndex = Math.floor(Math.random() * categories.length);
            const randomCategory = categories[randomCategoryIndex];
            setSelectedCategory(randomCategory);

            setModalOpen(true);
            setIsSpinning(false);
        }, 4900);
    };

    const closeModal = () => {
        setModalOpen(false)
    }

    const handleAction = () => {
        const currentContent = selectedCategory ? categoryContent[selectedCategory] : null;
        if (currentContent?.action === "redirect") {
            navigate(`/qaplay/${currentContent.block}`);
        } else if (currentContent?.action === "spin") {
            closeModal();
        }
    };

    const currentContent = selectedCategory ? categoryContent[selectedCategory] : null;

    return (
        <>
            <div
                className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/bg_ruleta.png")' }}
            >
                <img src={ruleta} className={isSpinning ? 'spin-animation' : ""} alt="" width={500} />
                <button onClick={() => handleSpin()} className="mt-7 px-7 py-3 text-white font-bold rounded-full bg-indigo-700 text-3xl">GIRAR</button>
            </div>

            <PhraseModal
                isOpen={isModalOpen}
                content={
                    currentContent && (
                        <div className="h-full font-bold flex flex-col items-start justify-center gap-14">
                            <div>
                                <h1 className="text-6xl mb-4 text-green-600">¡La Ruleta habló!</h1>
                                <h2 className="text-4xl">Este es el resultado:</h2>
                            </div>
                            <div>
                                <h2 className='text-4xl'>{currentContent.title}</h2>
                                <p className='text-3xl mt-3'>{currentContent.message}</p>
                            </div>
                            <button className="w-fit px-7 py-3 uppercase font-bold text-2xl bg-indigo-600 rounded-full active:scale-110 transition" onClick={() => handleAction()}>Cerrar</button>
                        </div>
                    )
                }
            />
        </>
    );
}