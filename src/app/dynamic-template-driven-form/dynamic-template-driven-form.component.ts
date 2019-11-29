import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-template-driven-form',
  templateUrl: './dynamic-template-driven-form.component.html',
  styleUrls: ['./dynamic-template-driven-form.component.css']
})
export class DynamicTemplateDrivenFormComponent implements OnInit {

  @Input() dynamicForm: FormGroup;
  @Output() Form = new EventEmitter<FormGroup>();
  @Output() methods = new EventEmitter();

  checkbox_data = {}
  formData = {}
  constructor() { }
  ngOnInit() {
  }
  onSubmit(form) {
    if (form.form.status == 'VALID') {
      this.Form.emit(form.form.value)
    }
    this.formData = form
  }

  onClick(method) {
    console.log(method);
    this.methods.emit(method)
  }

  onChange(data: string, key: string, isChecked: boolean) {
    if (!this.checkbox_data[key]) this.checkbox_data[key] = []
    if (isChecked) this.checkbox_data[key].push(data);
    else this.checkbox_data[key].splice(this.checkbox_data[key].indexOf(data), 1);
  }

}
