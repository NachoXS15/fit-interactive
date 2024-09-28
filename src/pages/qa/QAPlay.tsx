import { useEffect, useState } from "react";
import Questions from "../../config/Questions";
import getPhrase from "./getPhrase";
import TimerBar from "../../components/Timebar";
import bgResult from '/assets/ruleta_result.webp'
import { useNavigate } from "react-router";
export default function QAPlay() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [optionsPicked, setOptionsPicked] = useState<{ question: string, answer: string, isCorrect: boolean }[]>([]);
	const [isOpenGo, setIsOpenGo] = useState(false);
	const [showAnswers, setShowAnswers] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [phrase, setPhrase] = useState({ title: '', desc: '' });
	const [timeLeft, setTimeLeft] = useState(15);
    const navigate = useNavigate()
	console.log(timeLeft);

	const blocks = [1, 2, 3, 4, 5];
	const blockIndex = blocks[Math.floor(Math.random() * blocks.length)];
	const qaBlock = Questions.filter(question => question.block === blockIndex);
	useEffect(() => {
		setTimeLeft(15);
		if (!isFinished) {
			const timer = setTimeout(() => {
				handleAnswer(false, null)
			}, 15000);
			return () => clearTimeout(timer)
		}
	}, [currentQuestion, isFinished])


	const handleAnswer = (isCorrect: boolean, e: React.MouseEvent<HTMLButtonElement> | null) => {
		if (isFinished) return;
		const updatedScore = isCorrect ? score + 1 : score;

		if (isCorrect) setScore(updatedScore);
		if (e) {
			const target = e.target as HTMLButtonElement | null;
			if (target) {
				setOptionsPicked(prev => [
					...prev,
					{
						question: qaBlock[currentQuestion].question,
						answer: target.textContent || '',
						isCorrect
					}
				]);
			}
		} else {
			setOptionsPicked(prev => [
				...prev,
				{
					question: qaBlock[currentQuestion].question,
					answer: '',
					isCorrect: false
				}
			]);
		}
		if (currentQuestion === qaBlock.length - 1) {
			const finalPhrase = getPhrase(updatedScore);
			setPhrase(finalPhrase);
			setIsFinished(true);
			setIsOpenGo(true);
		} else {
			setCurrentQuestion(prev => prev + 1);
		}
	};
	const closeModalGo = () => {
		setIsOpenGo(false)
		setShowAnswers(true)
	}

	const closeModalAnswers = () => {
		setShowAnswers(false)
		navigate("/ruleta")
	}

	return (
		<div className="w-full min-h-screen flex items-center justify-center bg-beige overflow-x-hidden overflow-y-hidden font-bold"
			style={{fontFamily: 'franklin-gothic-atf, sans-serif;'}}
		>
			<main className='w-full flex flex-col items-center justify-center gap-4'>
                <div className="w-3/5 h-44 border-2 flex flex-col items-center justify-center text-center bg-white rounded-full border-black px-10">
                    <h4 className='text-xl underline'>Pregunta {currentQuestion + 1} de {qaBlock.length}</h4>
                    <div id='question-display'>
                        <h2 className='text-3xl'>{qaBlock[currentQuestion].question}</h2>
                    </div>
                </div>
                <TimerBar key={currentQuestion} />
                <div className='w-3/6 flex flex-col gap-2'>
                    {qaBlock[currentQuestion].answers.map((answer) => (
                        <button
                            key={answer.answer}
                            onClick={(e) => handleAnswer(answer.isCorrect, e)}
                            className='w-full h-20 rounded-full border bg-white border-black px-10 text-2xl active:bg-blue-700 active:text-white'
                            disabled={showAnswers}
                        >
                            {answer.answer}
                        </button>
                    ))}
                </div>
            </main>
			{isFinished && isOpenGo && <>
                <div
                    className="w-5/6 h-[650px] rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
                    style={{ backgroundImage: `url(${bgResult})`, fontFamily: 'franklin-gothic-atf, sans-serif;'}}
                >
                    <div className="w-auto my-12 bg-cover bg-center flex flex-col items-end pr-20 mt-20 text-white">
                        <h2 className='text-6xl text-green-600 mt-4'>¡Juego terminado!</h2>
                        <p className='text-4xl text-darkblue'>Esperamos que te hayas divertido</p>
                        <div className='mt-14 text-end'>
                            <h2 className='text-5xl text-darkblue'>{phrase.title}</h2>
                            <h2 className='text-xl text-orange-500'>{phrase.desc}</h2>
                        </div>
                        <div className='mt-10 text-end'>
                            <h2 className='text-4xl text-darkblue'>Acertaste:</h2>
                            <h2 className='text-3xl text-orange-500'><span className='text-green-600'>{score} </span>de {qaBlock.length} preguntas</h2>
                        </div>
                        <button
                            onClick={() => closeModalGo()}
                            className='text-4xl mt-7 bg-purple px-3 py-4 rounded-full bg-orange-600 active:scale-105 transition'
                        >
                            Mostrar Respuestas
                        </button>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>}
			{isFinished && showAnswers && <>
				<div
					className="w-11/12 h-[850px] bg-beige rounded-3xl m-auto overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-cover bg-center focus:outline-none"
					// style={{ backgroundImage: `url(${bgResult})`}}
				>
					<div className="w-full h-[700px] my-16 gap-5 bg-cover bg-center flex flex-col items-center justify-center text-white"
						style={{fontFamily: 'franklin-gothic-atf, sans-serif;'}}
					>
						<h1 className='text-5xl mt-8 text-darkblue'>Verificá tus respuestas</h1>
						<section className='w-full flex flex-wrap  items-center justify-center gap-0.5'>
							{optionsPicked.map((picked, index) => (
								<div key={index} className='w-1/3 flex flex-col'>
									<p className='text-md font-bold text-darkblue'><strong><span className='text-xl text-orange-500'>Pregunta: </span></strong><br />{picked.question}</p>
									<p className='text-sm text-red-500'><strong><span className="">Respuesta Elegida: </span></strong>{picked.answer} - <span className={picked.isCorrect ? 'bg-green-600 text-xl text-white' : 'bg-red-600 text-xl text-white'}>({picked.answer === "" ? 'No respondió' : picked.isCorrect ? 'Correcto' : 'Incorrecto'})</span></p>
									<hr className="w-3/5 border" />
								</div>
							))}
						</section>
						<button onClick={closeModalAnswers} className="text-3xl bg-purple px-3 py-4 rounded-full uppercase bg-orange-600 active:scale-105 transition">Volver a empezar</button>
					</div>
				</div>
				<div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
			</>
			}
            
		</div>
	)
}

