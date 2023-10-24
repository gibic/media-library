import { A as APIURL, a as APISECRET, b as APIENDPOINT } from "../../../chunks/private.js";
const load = async ({ fetch: fetch2 }) => {
  const url = `${APIURL}?sort=DESC_CREATED`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${APISECRET}`
    }
  };
  const response = await fetch2(url, options);
  const result = await response.json();
  const url_image = APIENDPOINT;
  return {
    post: {
      items: result,
      host: url_image
    }
  };
};
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const fileId = data.get("fileId");
    const tagsValue = data.get("tags");
    let tagSent;
    if (tagsValue) {
      tagSent = tagsValue.toString().split(",");
    } else {
      tagSent = null;
    }
    const raw = JSON.stringify({
      tags: tagSent
    });
    const apiUrl = `${APIURL}/${fileId}/details`;
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${APISECRET}`
      },
      body: raw
    };
    try {
      const response = await fetch(apiUrl, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data2 = await response.json();
      console.log("Data successfully fetched:", data2);
    } catch (error) {
      console.error("Fetch error:", error);
    }
    return { success: true };
  }
};
export {
  actions,
  load
};
