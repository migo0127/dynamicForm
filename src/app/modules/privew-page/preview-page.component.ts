import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TagFormat } from 'src/app/model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import * as _ from 'lodash';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss']
})
export class PreviewPageComponent implements OnInit{

  @Input() dropFormList: TagFormat[];

  public dynamicForm: FormGroup;
  public modalRef?: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) {

  }

  public ngOnInit(): void {

  }

  public ngAfterViewInit(): void {
    if(this.dropFormList.length > 0){
      this.initRegistrationForm();
      }
  }

  // 動態產生報名表單
  initRegistrationForm(): void{
    setTimeout(() => {
      this.dynamicForm = this.fb.group({});
      for(let data of this.dropFormList){
        this.dynamicForm.addControl(data.key, this.fb.control(this.defaultValue(data?.value), this.defaultValidator(data)));
      }
    }, 0);
  }

  private defaultValue(value: string | number | string[] | null ): string | number | string[] | null {
    console.log(typeof value);
    return typeof value === 'string' ? '' : (typeof value === 'object' && value !== null ? [] : null);
  }

  private defaultValidator(data: TagFormat): any[] | null{
    const validators: any[] = [];
    if(data.require) validators.push(Validators.required);
    if(data.type === 'email') validators.push(Validators.email);
    return validators.length > 0 ? validators : null;
  }

  // 單選/多選 改變選項時，需將最新值更新至 operationForm
  onRadioOrCheckboxChange(data: TagFormat, value: string):void{
    if(data.type === 'radio'){
      data.value = value;
      this.dynamicForm.patchValue({
        [data.key]: value
      });
    }else{
      const values: string[] = data.value as string[];
      values.includes(value) ? values.splice(values.indexOf(value), 1) : values.push(value);
      data.value = values;
      this.dynamicForm.patchValue({
        [data.key]: values
      });
    }

  }

  public onSubmit(dataModal: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(dataModal);
    console.log('onSubmit: ', [this.dropFormList, this.dynamicForm]);
  }

}
