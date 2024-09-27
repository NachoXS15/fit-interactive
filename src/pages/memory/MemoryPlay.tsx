import { useEffect, useState } from "react";
import CardProps from "../../config/CardProps";
import cards from "../../config/Cards";
import getPhrase from "./getPhrase";
import bgResult from '../../../public/assets/memory_result.webp'
import Card from "../../components/Card";
import { NavLink } from "react-router-dom";
export default function MemoryPlay() {
	const [cardsA, setCardsA] = useState<CardProps[]>([]);
	const [firstCard, setFirstCard] = useState<CardProps | null>(null);
	const [SecondCard, setSecondCard] = useState<CardProps | null>(null);
	const [disabledCards, setDisabledCards] = useState<number[]>([]);
	const [unFlippedCards, setUnFlippedCards] = useState<number[]>([]);
	const [score, setScore] = useState(0)
	const [timeLeft, setTimeLeft] = useState(120)
	const [isFinished, setIsFinished] = useState(false);
	const [showResults, setShowResults] = useState(false);
	const [phrase, setPhrase] = useState({ title: '', desc: '' })
	const [hasGameEnded, setHasGameEnded] = useState(false);

	

	//baraja las cartas aleatoriamente
	const shuffleCards = (array: CardProps[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp
		}
	}

	//asigna las cartas a voltear en caso de no estarlo
	const flipCards = (cardName: string, index: number) => {
		if (firstCard && firstCard.index === index) {
			return;
		}
		if (!firstCard) {
			setFirstCard({ cardName, index });
		} else if (!SecondCard) {
			setSecondCard({ cardName, index });
		}
	};

	//revisa si las cartas selecciondas coinciden
	const checkCards = () => {
		if (firstCard && SecondCard) {
			const match = firstCard.cardName === SecondCard.cardName;
			if (match) {
				disableCards()
				setScore(score + 1)
			} else {
				unFlipCards();
			}
		}
	};

	//define una frase en base al score
	const phraseCatch = (score: number) => {
		const finalPhrase = getPhrase(score)
		setPhrase(finalPhrase)
	}

	//deshabilita las cartas disponibles para jugar
	const disableCards = () => {
		if (firstCard && SecondCard) {
			setDisabledCards([...disabledCards, firstCard.index!, SecondCard.index!]);
		}
		resetCards();
	};

	const unFlipCards = () => {
		if (firstCard && SecondCard) {
			setUnFlippedCards([firstCard.index!, SecondCard.index!]);
		}
		resetCards();
	};

	//resetea las cartas en caso de no coindicir
	const resetCards = () => {
		setFirstCard(null);
		setSecondCard(null);
	};

	useEffect(() => {
		shuffleCards(cards);
		setCardsA([...cards]);
	}, []);

	//en base a la segunda carta, ejecuta checkCards
	useEffect(() => {
		if (SecondCard) {
			checkCards();
		}
	}, [SecondCard]);
	//contador de tiempo
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(timeLeft - 1)
		}, 1000)

		if (timeLeft == 0 || hasGameEnded) {
			clearTimeout(timer)
		}

	}, [timeLeft, hasGameEnded]);

	//condiciones para terminar el juego y mostrar resultados
	useEffect(() => {
		if ((score === 11 || timeLeft === 0) && !hasGameEnded) {
			setHasGameEnded(true); // Evitar múltiples ejecuciones
			setIsFinished(true);
			setShowResults(true);
			phraseCatch(score);
		}
	}, [score, timeLeft, hasGameEnded]);

	return (
		<>
			<div className="w-full relative flex items-center justify-center">
				<div className="w-full bg-black relative flex flex-col justify-between overflow-y-hidden">
					<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" style={{ position: 'relative', top: '-300px', left: '-200px' }} viewBox="0 0 1267 1267">
						<g id="Grupo_1" data-name="Grupo 1" transform="translate(205.785 -1153.215)">
							<circle id="Elipse_1" data-name="Elipse 1" cx="633.5" cy="633.5" r="633.5" transform="translate(-205.785 1153.215)" fill="#fe615e" />
							<circle id="Elipse_2" data-name="Elipse 2" cx="523" cy="523" r="523" transform="translate(-95.785 1263.215)" fill="#efde5a" />
							<circle id="Elipse_3" data-name="Elipse 3" cx="402" cy="402" r="402" transform="translate(25.215 1384.215)" fill="#68caf1" />
							<circle id="Elipse_13" data-name="Elipse 13" cx="287" cy="287" r="287" transform="translate(140.215 1499.215)" />
						</g>
					</svg>
					<img src="/assets/items/cosa.webp" className="absolute w-full m-auto top-0" alt="" />
					<div className="w-full flex justify-between bottom-0 overflow-hidden relative">
						<img src="/assets/items/parlante.webp" width={300} className="relative" style={{ bottom: '-100px', left: '-100px' }} alt="" />
						<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" className="bottom-0" style={{ position: 'relative', bottom: '-100px', right: '-200px' }} viewBox="0 0 1267 1267">
							<g id="Grupo_1" data-name="Grupo 1" transform="translate(205.785 -1153.215)">
								<circle id="Elipse_1" data-name="Elipse 1" cx="633.5" cy="633.5" r="633.5" transform="translate(-205.785 1153.215)" fill="#fe615e" />
								<circle id="Elipse_2" data-name="Elipse 2" cx="523" cy="523" r="523" transform="translate(-95.785 1263.215)" fill="#efde5a" />
								<circle id="Elipse_3" data-name="Elipse 3" cx="402" cy="402" r="402" transform="translate(25.215 1384.215)" fill="#68caf1" />
								<circle id="Elipse_13" data-name="Elipse 13" cx="287" cy="287" r="287" transform="translate(140.215 1499.215)" />
							</g>
						</svg>
					</div>
				</div>
				<div className="h-full opacity-30 fixed inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(/assets/texture.png)` }}
				>
				</div>

				<div className='w-10/12 absolute top-4 mt-5 bg-white bg-opacity-40 rounded-md' style={{ fontFamily: 'dynapuff' }}>
					<div className="w-full h-fit flex flex-col justify-between items-center text-white">
						<h1 className='text-6xl text-center mt-10 mb-2 underline'>Juego de la Memoria</h1>
						<div className='w-3/5 h-3/5 flex flex-wrap items-center justify-center'>
							{cardsA.map((card, index) => (
								<Card
									key={index}
									cardName={card.cardName}
									index={index}
									img={card.img}
									flipCards={() => flipCards(card.cardName, index)}
									disabledCards={disabledCards}
									unFlippedCards={unFlippedCards}
								/>
							))}
						</div>
						<div className='w-full flex justify-around mt-4'>
							<h2 className='text-4xl pb-10 pr-10'>Tiempo restante: <span className={`${timeLeft < 30 ? "text-red-600" : "text-white"}`}>{timeLeft}</span>s</h2>
							<h2 className='text-4xl pb-10 pr-10'>Puntuacion: {score}/11</h2>
						</div>
					</div>
				</div>
			</div>
			{
				isFinished && showResults ? <>
					<div
						className="w-5/6 h-[650px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
						style={{ backgroundImage: `url(${bgResult})`, fontFamily: 'dynapuff' }}
					>
						<div className="w-auto my-12 bg-cover bg-center flex flex-col items-start pl-36 pt-14 text-white">
							{/*content*/}
							<h2 className='text-6xl text-green-600'>¡Juego terminado!</h2>
							<p className='text-4xl mt-3'>Esperamos que te hayas divertido</p>
							<div className='mt-14'>
								<h2 className='text-5xl'>{phrase.title}</h2>
								<h2 className='w-4/5 text-3xl'>{phrase.desc}</h2>
							</div>
							<NavLink
								to="/"
								className='text-3xl mt-14 bg-purple px-3 py-4 bg-indigo-800 rounded-full active:scale-105 transition'
							>
								Volver a inicio
							</NavLink>
						</div>
					</div>
					<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
				</>
					: null
			}
		</>
	)
}
