import axios from 'axios'

export const setAnswers = async ({data, email}) => {
	const newData = {
		data,
		email,
	}
	return axios
		.post('https://web-production-ae32.up.railway.app/send', newData)
		.then(function () {
			return {message: 'success'}
		})
		.catch(function (error) {
			console.log(error)
		})
}
