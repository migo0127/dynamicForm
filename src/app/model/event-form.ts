export enum TagType{
  INPUT = 'input',
  RADIOORCHECKBOX = 'radioOrCheckbox',
  TEXTAREA = 'textarea',
  SELECT = 'select',
}

export interface TagFormat{
  tag: string,
  type: string,
  key: string,
  name: string,
  value: string[] | string | number | null,
  require: boolean,
  options?: tagOption,
}

export interface tagOption{
  optionList?: string[],
  inputValue?: string,
  rows?: string,
  maxLength?: string,
}

export class TagFormat{
  static init(): TagFormat[]{
    const tagList: TagFormat[] = [
      {
        tag: TagType.INPUT,
        type: 'text',
        key: 'lastName',
        name: '姓氏',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: 'firstName',
        name: '名字',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: 'name',
        name: '姓名',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'email',
        key: 'email',
        name: '信箱',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'tel',
        key: 'phone',
        name: '電話',
        value: null,
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: 'id',
        name: '會員編號 ID',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: '文字欄位',
        name: '文字欄位',
        value: '',
        require: true
      },
      {
        tag: TagType.TEXTAREA,
        type: 'text',
        key: '文字區塊',
        name: '文字區塊',
        value: '文字區塊內容',
        require: true,
        options: {
          rows: '3',
          maxLength: '200',
        }
      },
      {
        tag: TagType.RADIOORCHECKBOX,
        type: 'radio',
        key: '單選區塊',
        name: '單選區塊',
        value: '',
        require: true,
        options:{
          optionList: ['radio1', 'radio2'],
          inputValue: 'radio1,radio2'
        }
      },
      {
        tag: TagType.RADIOORCHECKBOX,
        type: 'checkbox',
        key: '多選區塊',
        name: '多選區塊',
        value: [],
        require: true,
        options: {
          optionList: ['checkbox1', 'checkbox2'],
          inputValue: 'checkbox1,checkbox2'
        }
      },
      {
        tag: TagType.SELECT,
        type: 'select',
        key: '下拉式選單',
        name: '下拉式選單',
        value: '',
        require: true,
        options: {
          optionList: ['option1', 'option2'],
          inputValue: 'option1,option2'
        },
      }
    ];
    return tagList;
  }
}
