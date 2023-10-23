import type { PageServerLoad, Actions } from "./$types";
import { APIENDPOINT, APISECRET, APIURL } from "$env/static/private";

export const load: PageServerLoad = async ({ fetch }) => {
  const url = `${APIURL}?skip=0&limit=3&sort=DESC_CREATED`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${APISECRET}`,
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  const url_image = APIENDPOINT;
  return {
    post: {
      items: result,
      host: url_image,
    },
  };

}
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const fileId = data.get("fileId");
    const tagsValue = data.get("tags");
    let tagSent : string[] | null

    if (tagsValue) {
     tagSent = tagsValue.toString().split(',');
    } else {
      tagSent = null
    }

    const raw = JSON.stringify({
      tags: tagSent,
    });

    const apiUrl = `${APIURL}/${fileId}/details`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${APISECRET}`,
      },
      body: raw,
    };

    try {
      const response = await fetch(apiUrl, options);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Data successfully fetched:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }

    return { success: true };
  },
} satisfies Actions;
