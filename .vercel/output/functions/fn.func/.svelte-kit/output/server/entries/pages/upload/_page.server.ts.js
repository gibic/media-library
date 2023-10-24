import { c as APIUPLOAD, a as APISECRET } from "../../../chunks/private.js";
const actions = {
  upload: async ({ request }) => {
    const data = await request.formData();
    const file = data.get("file");
    const fileName = data.get("fileName");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    const apiUrl = `${APIUPLOAD}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Basic ${APISECRET}`
      },
      body: formData
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
  actions
};
