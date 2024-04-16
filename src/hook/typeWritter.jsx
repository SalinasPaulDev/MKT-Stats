import {useState, useEffect, useRef} from 'react'

export const useTypewriter = (text, speed = 50) => {
	const [displayText, setDisplayText] = useState('')

	useEffect(() => {
		let i = 0
		const typingInterval = setInterval(() => {
			if (i < text.length || i === 1) {
				let letra = text.charAt(i)
				setDisplayText((prev) => (prev += letra))

				i++
			} else {
				clearInterval(typingInterval)
			}
		}, speed)

		return () => {
			clearInterval(typingInterval)
		}
	}, [text, speed])

	return displayText
}
