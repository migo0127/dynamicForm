import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { TagFormat, TagType } from 'src/app/model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import * as _ from 'lodash';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{

  public dropFormList: TagFormat[];
  public dragFormList: TagFormat[];
  public displayDropFormList: TagFormat[] = [];
  public selectedConfigData: TagFormat | any;
  public modalRef?: BsModalRef;
  public isPrivewPage: boolean = false;

  constructor (
    private modalService: BsModalService
  ){
  }

  ngOnInit(): void {
    this.dropFormList = [];
    this.dragFormList = TagFormat.init();
  }

  // 從組件區拖拉至報名表區
  drop(event: CdkDragDrop<any[]>) {
    console.log('drop: ', event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.dropFormList = _.cloneDeep(this.dropFormList);
      console.log("drop: ", [this.dropFormList]);
    }
  }

  // 移除報名表區表單輸入項
  removeItem(index: number): void{
    console.log("removeItem: ", [index, this.dropFormList]);
    this.dropFormList.splice(index, 1);
  }

  // inpute格式配置
  inputConfig(data: TagFormat | any, configModal: TemplateRef<any>): void{
    this.selectedConfigData = data;
    this.modalRef = this.modalService.show(configModal);
  }

  // 關閉配置彈跳框並設定值
  hideConfig(): void{
    this.selectedConfigData.title = this.selectedConfigData.title;
    switch(this.selectedConfigData.tag){
      case TagType.RADIOORCHECKBOX:
        this.selectedConfigData.options.optionList = this.selectedConfigData?.options?.inputValue?.split(',')?.map( (v: string) => v?.trim()) || '';
        break;
      case TagType.SELECT:
        this.selectedConfigData.options.optionList = this.selectedConfigData?.options?.inputValue?.split(',')?.map( (v: string) => v?.trim()) || [];
        break;
      default:
        break;
    }
    this.modalRef?.hide();
  }

  // 重置表單
  resetForm(): void{
    this.dropFormList = [];
  }

  // 預覽表單
  previewForm(): void{
    this.displayDropFormList = _.cloneDeep(this.dropFormList);
    for(let index of this.displayDropFormList.keys()){
      const item = this.displayDropFormList[index];
      item.key = index + 1;
      item.name = `${item.key}-${item.tag}`;
    }
    this.isPrivewPage = true;
    console.log('privewForm: ', [this.displayDropFormList]);
  }

  // 返回配置頁
  goBack(): void{
    this.isPrivewPage = false;
  }

}
