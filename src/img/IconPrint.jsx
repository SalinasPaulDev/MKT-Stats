const PrintIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 20 20'
		>
			<g fill='#ffffff'>
				<rect
					width='18'
					height='11'
					x='2'
					y='7.5'
					opacity='.2'
					rx='3'
				></rect>
				<path d='M5 6.5H4V2.1C4 1.234 4.612.5 5.417.5h9.166C15.388.5 16 1.234 16 2.1v4.4h-1V2.1c0-.35-.209-.6-.417-.6H5.417c-.208 0-.417.25-.417.6z'></path>
				<path
					fillRule='evenodd'
					d='M16 6H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3M2 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z'
					clipRule='evenodd'
				></path>
				<path d='M15 11.969h1v5.25c0 .97-.588 1.812-1.417 1.812H5.417C4.588 19.031 4 18.19 4 17.22v-5.25h1v5.25c0 .479.233.812.417.812h9.166c.184 0 .417-.333.417-.812z'></path>
				<path d='M13.5 15.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z'></path>
			</g>
		</svg>
	)
}

export default PrintIcon
