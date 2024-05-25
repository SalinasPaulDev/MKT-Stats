export function InfoIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.5em'
			height='1.5em'
			viewBox='0 0 48 48'
			{...props}
		>
			<path
				fill='#2196F3'
				d='M37 40H11l-6 6V12c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v22c0 3.3-2.7 6-6 6'
			></path>
			<g fill='#fff'>
				<path d='M22 20h4v11h-4z'></path>
				<circle
					cx='24'
					cy='15'
					r='2'
				></circle>
			</g>
		</svg>
	)
}
