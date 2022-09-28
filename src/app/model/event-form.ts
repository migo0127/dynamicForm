export enum TagType{
  INPUT = 'input',
  RADIOORCHECKBOX = 'radioOrCheckbox',
  TEXTAREA = 'textarea',
  SELECT = 'select',
}

export interface TagFormat{
  tag: string,
  type: string,
  key: number | null,
  name: string | null,
  title: string,
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
        key: null,
        name: 'name',
        title: '姓氏',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: null,
        name: 'firstName',
        title: '名字',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: null,
        name: 'lastName',
        title: '姓名',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'email',
        key: null,
        name: 'email',
        title: '信箱',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'tel',
        key: null,
        name: 'phone',
        title: '電話',
        value: null,
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: null,
        name: 'id',
        title: '會員編號 ID',
        value: '',
        require: true
      },
      {
        tag: TagType.INPUT,
        type: 'text',
        key: null,
        name: null,
        title: '文字欄位',
        value: '',
        require: true
      },
      {
        tag: TagType.TEXTAREA,
        type: 'text',
        key: null,
        name: null,
        title: '文字區塊',
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
        key: null,
        name: null,
        title: '單選區塊',
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
        key: null,
        name: null,
        title: '多選區塊',
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
        key: null,
        name: null,
        title: '下拉式選單',
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
