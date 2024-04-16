import axios from 'axios'

export const setAnswers = async () => {
	const values = {
		documented_answer: true,
		manifest_answer: true,
		audience_answer: true,
		portfolio_answer: false,
	}

	return axios
		.post('https://web-production-ae32.up.railway.app/chatbot', values)
		.then(function (response) {
			const res = response.data.generated_text.choices[0].message.content
			return {message: res}
		})
		.catch(function (error) {
			console.log(error)
		})
}
