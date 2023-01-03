export interface AllMailType {
  id: string;
  threadId: string;
}

export interface SelectedMailType {
  snippet: string;
  payload: {
    headers: [
      {
        name: string;
        value: string;
      }
    ];

    parts: [
      {
        partId: string;
        body: {
          size: number;
          data: string;
        };
      }
    ];
  };
}

export interface DataModel {
  email: string;
  currentCategory: string;
  mails: AllMailType[];
  selectedMail: SelectedMailType;
}
