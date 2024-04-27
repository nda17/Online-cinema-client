export const getRandomItem = (arr: any, count: any) => {
	if (!Array.isArray(arr) || count <= 0) {
		throw new Error('Invalid input')
	}

	const result = []

	while (count--) {
		const index = Math.floor(Math.random() * arr.length)
		result.push(arr[index])
		arr.splice(index, 1)
	}

	return result
}
