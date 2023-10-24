import { SvelteGoogleAuthHook } from "svelte-google-auth/server";
import { S as SECRETJSON } from "./private.js";
const envJson = JSON.parse(SECRETJSON);
const auth = new SvelteGoogleAuthHook(envJson.web);
const handle = async ({ event, resolve }) => {
  return await auth.handleAuth({ event, resolve });
};
export {
  handle
};
