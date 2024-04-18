import * as React from 'react'
import {flushSync} from 'react-dom'
import {useNavigate, Link} from 'react-router-dom'

export const AnimatedLink = ({to, children}) => {
	const navigate = useNavigate()

	const isSafari =
		/constructor/i.test(window.HTMLElement) ||
		(function (p) {
			return p.toString() === '[object SafariRemoteNotification]'
		})(
			!window['safari'] ||
				(typeof safari !== 'undefined' && window['safari'].pushNotification),
		)

	return (
		<>
			{isSafari ? (
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
