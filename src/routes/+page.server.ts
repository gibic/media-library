import type { PageServerLoad  } from './$types';
import { APISECRET } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {

	// Make the GET request
	const url = `https://api.imagekit.io/v1/files`;
	const options = {
		method: 'GET',
		headers: {Accept: 'application/json', Authorization: `Basic ${APISECRET}`}
	};

	const response = await fetch(url, options);

	const result = await response.json()

	return {
		post: {
			items: result
		},
	};
};