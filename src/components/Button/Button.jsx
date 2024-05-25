import React from 'react'
import {AnimatedLink} from '../AnimatedLink/AnimatedLink'

export const Button = ({link, text, icon, disabled}) => {
	return (
		<AnimatedLink
			to={link}
			disabled={disabled}
		>
			<button
				className={`${disabled ? 'bg-black/10' : 'bg-blue-500 hover:bg-blue-600'} mt-8 md:mt-2  py-2 px-4 rounded-2xl font-semibold text-white m-auto text-lg  transition duration-500 flex items-center justify-between gap-2`}
			>
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
