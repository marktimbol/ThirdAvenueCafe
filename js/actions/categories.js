export const fetchCategories = () => {
	return (dispatch) => {
		fetch('http://3rdavenuecafe.glocalguys.com/api/categories')
			.then((response) => response.json())
			.then((categories) => {
				dispatch(categoriesWasFetched(categories));
			})
			.catch((error) => {
				console.log(error);
			})
	}
}

export const categoriesWasFetched = (categories) => {
	return {
		type: 'CATEGORIES_WAS_FETCHED',
		categories
	}
}