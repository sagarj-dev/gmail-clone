export interface AllMailType {
  id: string;
  threadId: string;
}

export interface SelectedMailType {
  snippet: string;
  payload: {
    body: {
      data: string;
      size: number;
    };
    headers: [
      {
        name: string;
        value: string;
      }
    ];

    parts: [
      {
        partId: string;
        mimeType: string;
        body: {
          size: number;
          data: string;
        };
      }
    ];
  };
}

export interface DataModel {
  page: number;
  email: string;
  currentCategory: string;
  mails: AllMailType[];
  selectedMail: SelectedMailType;
}
