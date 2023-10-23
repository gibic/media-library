export interface ImageKitObject {
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