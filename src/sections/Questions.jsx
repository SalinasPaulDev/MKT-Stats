import {Link, ScrollRestoration} from 'react-router-dom'
import {Bento} from '../components/Bento/Bento'
import {Footer} from '../components/Footer/Footer'
import {Button} from '../components/Button/Button'
import Modal from '../components/Modal/Modal'
import {useHandleModal} from '../store/handleModal'
import {
	useDocumentationAnswersStore,
	useIdentityAnswersStore,
	useStrategyAnswersStore,
	useTeamWorkAnswersStore,
} from '../store/answers'
import {getPercentage} from '../utils'

export const Questions = () => {
	const {open, setOpen} = useHandleModal((state) => state)
	const {updateValues: documentUpdateValues, ...documentaryAnswers} =
		useDocumentationAnswersStore((state) => state)
	const {updateValues: strategyUpdateValues, ...strategyAnswers} =
		useStrategyAnswersStore((state) => state)
	const {updateValues: updateIdentityValues, ...identityAnswers} =
		useIdentityAnswersStore((state) => state)
	const {updateValues: updateTeamValues, ...teamValues} =
		useTeamWorkAnswersStore((state) => state)

	const isResultsActive =
		getPercentage(documentaryAnswers) === 100 &&
		getPercentage(strategyAnswers) === 100 &&
		getPercentage(identityAnswers) === 100 &&
		getPercentage(teamValues, true) >= 75
			? true
			: false
	return (
		<div>
			<h2 className='text-2xl font-semibold mt-10 text-center'>
				Responde las siguientes preguntas para comenzar.
			</h2>
			<p className='text-center text-zinc-500'>
				Elije una categoria a la vez para ir resolviendo las preguntas
			</p>

			<div
				onClick={() => (!isResultsActive ? setOpen(true) : {})}
				className='m-auto flex justify-center max-w-[1400px] mx-auto px-8 md:px-20 md:justify-end'
			>
				<Button
					link={isResultsActive ? '/results' : ''}
					text={'Resultados'}
					icon
				/>
			</div>
			<Bento />
			<Modal />
			<ScrollRestoration />
			<Footer />
		</div>
	)
}
