import type { Actions } from "./$types";
import { APIUPLOAD, APISECRET } from "$env/static/private";

export const actions = {
    upload: async ({ request }) => {
    const data = await request.formData();
    const file = data.get("file") as File;
    const fileName = data.get("fileName") as string;
    const formData = new FormData();
    formData.append('file', file)
    formData.append('fileName', fileName)

    const apiUrl = `${APIUPLOAD}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Basic ${APISECRET}`,
      },
      body: formData,
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
