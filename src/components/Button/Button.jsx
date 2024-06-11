import React from 'react'
import {AnimatedLink} from '../AnimatedLink/AnimatedLink'

export const Button = ({link, text, icon, disabled, underline}) => {
	return (
		<AnimatedLink
			to={link}
			disabled={disabled}
		>
			<button
				className={`${underline ? 'text-blue-500 bg-transparent border-[0.5px] border-blue-500/60   hover:text-white' : 'bg-blue-500 text-white'} ${disabled ? 'bg-black/10' : 'bg-blue-500 hover:bg-blue-600'} mt-8 md:mt-2  py-2 px-4 rounded-2xl font-semibold  m-auto text-lg  transition duration-500 flex items-center justify-between gap-2`}
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
