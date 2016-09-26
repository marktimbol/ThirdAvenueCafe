const categories = (state = [], action) => {
	switch(action.type)
	{
		case 'CATEGORIES_WAS_FETCHED':
			return action.categories;
		default:
			return state;
	}
}

export default categories;