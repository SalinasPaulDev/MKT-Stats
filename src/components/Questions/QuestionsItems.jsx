import {ScrollRestoration, useLocation} from 'react-router-dom'
import Logo from '/logo.svg'
import {
	useDocumentationAnswersStore,
	useIdentityAnswersStore,
	useStrategyAnswersStore,
	useTeamWorkAnswersStore,
} from '../../store/answers'
import {useEffect, useState} from 'react'
import {
	documentQuestions,
	identityQuestions,
	strategyQuestions,
	teamWorkQuestions,
} from '../../utils/questions'
import {Button} from '../Button/Button'
import {Select, SelectItem, Textarea} from '@nextui-org/react'

export const OPTIONS = {
	YES: 'yes',
	NO: 'no',
	EMPTY: '',
}

const GROUPS = {
	DOCUMENTATION: 'Documentación',
	STRATEGY: 'Estrategia',
	IDENTITY: 'identidad',
	TEAM: 'Equipo',
}

export const QuestionsItems = () => {
	const [currentQuestion, setCurrentQuestion] = useState([])
	const [textAreaValue, setTextAreaValue] = useState()
	const location = useLocation()
	const [currentGroup, setCurrentGroup] = useState(null)

	const {updateValues: updateDocumentationValues, ...storeQuestions} =
		useDocumentationAnswersStore((state) => state)
	const {updateValues: updateStrategyValues, ...strategyAnswers} =
		useStrategyAnswersStore((state) => state)
	const {updateValues: updateIdentityValues, ...identityAnswers} =
		useIdentityAnswersStore((state) => state)
	const {updateValues: updateTeamValues, ...teamValues} =
		useTeamWorkAnswersStore((state) => state)

	const currentLocation = location.pathname

	const showQuestionsByCategory = () => {
		if (currentLocation === '/questions/documentation') {
			setCurrentQuestion(documentQuestions)
			setCurrentGroup(GROUPS.DOCUMENTATION)
		} else if (currentLocation === '/questions/strategy') {
			setCurrentQuestion(strategyQuestions)
			setCurrentGroup(GROUPS.STRATEGY)
		} else if (currentLocation === '/questions/identity') {
			setCurrentQuestion(identityQuestions)
			setCurrentGroup(GROUPS.IDENTITY)
		} else if (currentLocation === '/questions/team') {
			setCurrentQuestion(teamWorkQuestions)
			setCurrentGroup(GROUPS.TEAM)
		}
	}

	const handleUpdateValues = ({key, value, details}) => {
		if (currentLocation === '/questions/documentation') {
			updateDocumentationValues(key, value)
		} else if (currentLocation === '/questions/strategy') {
			updateStrategyValues(key, value)
		} else if (currentLocation === '/questions/identity') {
			updateIdentityValues(key, value)
		} else if (currentLocation === '/questions/team') {
			updateTeamValues(key, value, details)
		}
	}

	useEffect(() => {
		showQuestionsByCategory()
	}, [location.pathname])

	const isCheckedv2 = (key) => {
		let questionFound

		if (currentLocation === '/questions/documentation') {
			questionFound = Object.keys(storeQuestions).find((x) => x === key)
			if (storeQuestions[questionFound] === 'yes') {
				return OPTIONS.YES
			}
			if (storeQuestions[questionFound] === 'no') {
				return OPTIONS.NO
			} else {
				return OPTIONS.EMPTY
			}
		} else if (currentLocation === '/questions/strategy') {
			questionFound = Object.keys(strategyAnswers).find((x) => x === key)
			if (strategyAnswers[questionFound] === 'yes') {
				return OPTIONS.YES
			}
			if (strategyAnswers[questionFound] === 'no') {
				return OPTIONS.NO
			} else {
				return OPTIONS.EMPTY
			}
		} else if (currentLocation === '/questions/identity') {
			questionFound = Object.keys(identityAnswers).find((x) => x === key)
			if (identityAnswers[questionFound] === 'yes') {
				return OPTIONS.YES
			}
			if (identityAnswers[questionFound] === 'no') {
				return OPTIONS.NO
			} else {
				return OPTIONS.EMPTY
			}
		}
	}

	return (
		<div className='lg:w-full '>
			<div
				style={{backgroundImage: 'url("/wave.svg")'}}
				className='bg-no-repeat bg-center bg-cover relative top-0 left-0 right-0 py-28 bg-opacity-10'
			>
				<img
					src={Logo}
					className='w-20 text-center m-auto mb-16'
					alt='logo'
				/>

				<h3 className='font-semibold text-2xl  mb-4 text-center text-white pb-8'>
					Resuelve las preguntas:{' '}
				</h3>
			</div>

			<h4 className='text-2xl font-semibold text-center mb-6'>
				{currentGroup}
			</h4>

			<div className='flex flex-col gap-4 justify-center item-center lg:w-fit m-auto p-8 md:p-16'>
				{currentQuestion.map((question, index) => (
					<div
						key={question.question}
						className={`border-blue-500 min-h-14 bg-indigo-600/5 max-w-[800px] rounded-xl p-4 lg:min-w-max transition ease-in-out delay-150`}
					>
						<p>{`${index + 1} - ${question.question}`}</p>
						<div className='mt-4'>
							{currentLocation === '/questions/team' ? (
								<>
									<Select
										label='Elige una opción'
										className='max-w-xs'
										color='primary'
										onChange={(e) =>
											handleUpdateValues({
												key: question.key,
												value: e.target.value,
											})
										}
										defaultSelectedKeys={
											// teamValues[question.key].answer.length > 1
											[teamValues[question.key].answer]
											// : null
										}
									>
										{question.answers.map((x) => (
											<SelectItem
												key={x}
												value={x}
											>
												{x}
											</SelectItem>
										))}
									</Select>
									{teamValues[question.key].answer.length > 3 && (
										<div>
											<Textarea
												bordered
												color='primary'
												labelPlaceholder='Denos mas detalles'
												label='Describa detalladamente:'
												className='mt-8'
												maxLength={300}
												onChange={({target}) =>
													handleUpdateValues({
														key: question.key,
														details: target.value,
													})
												}
												value={teamValues[question.key].details}
											/>
										</div>
									)}
								</>
							) : (
								<div className='inline-flex items-center gap-4 mt-4 ml-4'>
									<label className='flex items-center gap-2'>
										<p>Si</p>
										<input
											type='radio'
											value={'yes'}
											name={question.question}
											onChange={({target}) =>
												handleUpdateValues({
													key: question.key,
													value: target.value,
												})
											}
											checked={
												isCheckedv2(question.key) === OPTIONS.YES ? true : false
											}
										/>
									</label>

									<label className='flex items-center gap-2'>
										<p>No</p>
										<input
											type='radio'
											value={'no'}
											name={question.question}
											onChange={({target}) =>
												handleUpdateValues({
													key: question.key,
													value: target.value,
												})
											}
											checked={
												isCheckedv2(question.key) === OPTIONS.NO ? true : false
											}
										/>
									</label>
								</div>
							)}
						</div>
					</div>
				))}
			</div>

			<div className='flex justify-center mb-20'>
				<Button
					link={'/questions'}
					text={'Continuar'}
				/>
			</div>
			<ScrollRestoration />
		</div>
	)
}
