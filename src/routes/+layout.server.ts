import type { LayoutServerLoad } from "./$types";
import { APISECRET, APIURL, APIENDPOINT } from "$env/static/private";

interface ImageKitObject {
  type: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  fileId: string;
  tags: string[] | null;
  AITags: string[] | null;
  versionInfo: {
    id: string;
    name: string;
  };
  embeddedMetadata: {
    DateCreated: string;
    DateTimeCreated: string;
  };
  customCoordinates: any;
  customMetadata: any;
  isPrivateFile: boolean;
  url: string;
  thumbnail: string;
  fileType: string;
  filePath: string;
  height: number;
  width: number;
  size: number;
  hasAlpha: boolean;
  mime: string;
}

export const load: LayoutServerLoad = async ({ fetch }) => {
  // Make the GET request
  const url = `${APIURL}`;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Basic ${APISECRET}`,
    },
  };

  const response = await fetch(url, options);

  const result: ImageKitObject[] = await response.json();

  const sort = result.sort(
    (a: ImageKitObject, b: ImageKitObject) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const url_image = APIENDPOINT;
  return {
    post: {
      items: sort,
      host: url_image,
    },
  };
};
