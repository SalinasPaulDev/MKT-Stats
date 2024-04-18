import React from 'react'
import {AnimatedLink} from '../AnimatedLink/AnimatedLink'

export const Button = ({link, text, icon}) => {
	return (
		<AnimatedLink to={link}>
			<button className='mt-8 md:mt-2 bg-blue-500 py-2 px-4 rounded-2xl font-semibold text-white m-auto text-lg hover:bg-blue-600  transition duration-500 flex items-center justify-between gap-2'>
				{text}
				{icon && (
					<img
						src={'/arrow.svg'}
						alt='arrow icon'
						className='w-4 h-4'
					/>
				)}
			</button>
		</AnimatedLink>
	)
}
