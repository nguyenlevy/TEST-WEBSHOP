export enum CodeModel {
  Success,
  Fail
}

export class JsonResultModel {
  data: any;
  message: string;
  code: CodeModel;
}
