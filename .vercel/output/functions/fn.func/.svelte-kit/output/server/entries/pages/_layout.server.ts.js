import { hydrateAuth } from "svelte-google-auth/server";
const load = ({ locals }) => {
  return { ...hydrateAuth(locals) };
};
export {
  load
};
