import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'get':
			return action.payload;
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

const getBlogPosts = (dispatch) => {
	return async () => {
		const response = await jsonServer.get('/blogposts');

		dispatch({ type: 'get', payload: response.data });
	};
};

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonServer.post('/blogposts', {
			title,
			content,
		});

		callback();
	};
};

const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		await jsonServer.put(`/blogposts/${id}`, {
			title,
			content,
		});
		dispatch({ type: 'edit', payload: { id, title, content } });
		callback();
	};
};

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogposts/${id}`);
		dispatch({ type: 'delete', payload: id });
	};
};

export const { useDataContext, DataProvider } = createDataContext(
	blogReducer,
	{
		getBlogPosts,
		addBlogPost,
		deleteBlogPost,
		editBlogPost,
	},
	[{ title: 'test', content: 'test', id: 1 }]
);
