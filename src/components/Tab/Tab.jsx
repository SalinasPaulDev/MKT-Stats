import React, {useEffect, useState} from 'react'
import {Tabs, Tab as NxtTab, Card, CardBody} from '@nextui-org/react'
import {setAnswers} from '../../api/suggestion'
import {useTypewriter} from '../../hook/typeWritter'
import {Button} from '@nextui-org/react'
import Icon from '/stars.svg'

const Typewriter = ({text}) => {
	const displayText = useTypewriter(text)

	return <p style={{whiteSpace: 'pre-line'}}>{displayText}</p>
}

export function Tab({children}) {
	const [isAITab, setIsAITab] = useState(false)
	const [text, setText] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const fetchData = async () => {
		try {
			const data = await setAnswers()
			return data.message
		} catch (error) {
			console.log('error')
		}
	}

	const handleAIClick = async () => {
		setIsLoading(true)
		const data = await fetchData()
		if (data) {
			setText(data)
			setIsLoading(false)
		}
	}

	return (
		<div className='flex w-full flex-col'>
			<Tabs
				aria-label='Options'
				onSelectionChange={(value) => setIsAITab(value == 1 ? true : false)}
				color={isAITab ? 'secondary' : 'primary'}
			>
				<NxtTab
					key={0}
					title='Respuestas'
				>
					<Card>
						<CardBody className='min-h-[200px] bg-blue-300/20 py-16'>
							{children}
						</CardBody>
					</Card>
				</NxtTab>
				<NxtTab
					key={1}
					title='AI'
				>
					<Card>
						<CardBody className='py-14 px-8 bg-indigo-400/20 min-h-[700px]'>
							<img
								src='/logo-AI.svg'
								alt=''
								className='w-32 m-auto my-0'
							/>
							{!isLoading ? (
								<p className='text-purple-800 text-center mt-8'>
									Creando sugerencia...
								</p>
							) : (
								<>
									<h3 className='text-2xl font-medium text-center mb-6 mt-0'>
										Sugerencia automatica
									</h3>
									{!text ? (
										<>
											<div className='md:w-2/4  m-auto'>
												<img
													src='/AI.svg'
													alt='icono de ai'
													className=' opacity-70'
												/>
												<p className='text-sm color-grey opacity-50 md:my-8 text-center'>
													¡Bienvenido a la sección de IA en nuestro sitio web!
													Aquí, nuestra inteligencia artificial te ofrece
													sugerencias personalizadas para tu estrategia de
													marketing. Descubre ideas frescas para potenciar tu
													empresa o PYME en línea. ¡Explora ahora!
												</p>
											</div>
											<Button
												color='secondary'
												className='w-fit m-auto'
												onClick={() => handleAIClick()}
											>
												<img
													src={'/stars.svg'}
													className='w-6 h-6'
													alt=''
												/>
												Generar sugerencia
											</Button>
										</>
									) : (
										<>
											<Typewriter text={text} />
										</>
									)}
								</>
							)}
						</CardBody>
					</Card>
				</NxtTab>
			</Tabs>
		</div>
	)
}
