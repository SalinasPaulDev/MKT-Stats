import * as React from 'react'
import {flushSync} from 'react-dom'
import {
	useNavigate,
	createBrowserRouter,
	RouterProvider,
	Link,
} from 'react-router-dom'

export const AnimatedLink = ({to, children}) => {
	const navigate = useNavigate()

	return (
		<>
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
		</>
	)
}
