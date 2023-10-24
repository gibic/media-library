import { SvelteGoogleAuthHook } from 'svelte-google-auth/server';
import type { Handle } from '@sveltejs/kit';
import { SECRETJSON } from '$env/static/private';

const envJson = JSON.parse(SECRETJSON)

// Import client credentials from json file
// import client_secret from '../client_secret.json';

const auth = new SvelteGoogleAuthHook(envJson.web);

export const handle: Handle = async ({ event, resolve }) => {
	return await auth.handleAuth({ event, resolve });
};