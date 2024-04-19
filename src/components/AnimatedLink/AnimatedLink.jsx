import * as React from 'react'
import {flushSync} from 'react-dom'
import {useNavigate, Link} from 'react-router-dom'

export const AnimatedLink = ({to, children}) => {
	const navigate = useNavigate()

	const isChrome =
		/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

	return (
		<>
			{!isChrome ? (
				<Link to={to}>{children}</Link>
			) : (
				<Link
					to={to}
					onClick={(event) => {
						event.preventDefault()
						document.startViewTransition(() => {
							flushSync(() => {
								navigate(to)
							})
						})
					}}
				>
					{children}
				</Link>
			)}
		</>
	)
}
