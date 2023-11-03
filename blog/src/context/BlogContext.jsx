import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content,
				},
			];
		case 'edit':
			return state.map((blogPost) =>
				blogPost.id === action.payload.id ? action.payload : blogPost
			);
		case 'delete':
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return (title, content, callback) => {
		dispatch({ type: 'add', payload: { title, content } });
		callback();
	};
};

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({ type: 'edit', payload: { id, title, content } });
		callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete', payload: id });
	};
};

export const { useDataContext, DataProvider } = createDataContext(
	blogReducer,
	{
		addBlogPost,
		deleteBlogPost,
		editBlogPost,
	},
	[{ title: 'test', content: 'test', id: 1 }]
);
