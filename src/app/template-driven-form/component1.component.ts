import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  form: any;
  powers: string[];
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.powers = ['Really Smart', 'Turbulent Breeze', 
                'Super Hot', 'Weather Changer'];
  }

  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;
  }

}
