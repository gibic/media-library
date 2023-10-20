import type { PageServerLoad  } from './$types';
import { APISECRET, APIURL, APIENDPOINT } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {

	// Make the GET request
	const url = `${APIURL}`;
	const options = {
		method: 'GET',
		headers: {Accept: 'application/json', Authorization: `Basic ${APISECRET}`},
	};

	const response = await fetch(url, options);

	const result = await response.json()

	const url_image = APIENDPOINT
	return {
		post: {
			items: result,
			host: url_image
		},
	};
};