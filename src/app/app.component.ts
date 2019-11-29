import { Component } from '@angular/core';
import { ServiceService } from './service1.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'project1';
  num: boolean = true;
  properties = [
    {
      "name": "first_name"
    },
    {
      "name": "last_name"
    }
  ]

  constructor(private dataService: ServiceService,private modalService: NgbModal) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
    })

  }

  test_data = {
    "buttons": [{
      "type": "submit",
      "class": "btn btn-primary",
      "function": "testMethod",
      "label": "Ok"
    }, {
      "type": "click",
      "class": "btn btn-outline-secondary",
      "function": "CancelMethod",
      "label": "Cancel"
    }],
    "fields": [{
      "fieldType": "select",
      "id": "dropdown",
      "name": "dropdown",
      "label": "Dropdown",
      "placeholder": "Select the operation type",
      "required": true,
      "options": {
        "Add": "create",
        "Delete": "delete"
      },
      "type": "dropdown",
      "message": "Please select a Type.",
      "class": "col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
    }, {
      "id": "text_input",
      "name": "text_input",
      "label": "Text Input",
      "required": true,
      "placeholder": "Please enter the tag",
      "type": "text",
      "fieldType": "input",
      "message": "The Tag field is required.",
      "class": "col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
    }, {
      "id": "number_input",
      "name": "number_input",
      "label": "Number Input",
      "required": true,
      "placeholder": "Please enter the tag",
      "type": "number",
      "fieldType": "input",
      "message": "The Tag field is required.",
      "class": "col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
    }, {
      "id": "email_input",
      "name": "email_input",
      "label": "Email Input",
      "required": true,
      "placeholder": "Please enter the tag",
      "type": "email",
      "fieldType": "input",
      "message": "The Tag field is required.",
      "class": "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    }, {
      "id": "password_input",
      "name": "password_input",
      "label": "Password Input",
      "required": true,
      "placeholder": "Please enter the tag",
      "type": "password",
      "fieldType": "input",
      "message": "The Tag field is required.",
      "class": "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    }, {
      "cols": "60",
      "fieldType": "textarea",
      "id": "textarea",
      "label": "Textarea",
      "name": "textarea",
      "required": true,
      "rows": "25",
      "placeholder": "Enter email body here",
      "type": "textarea",
      "message": "The Body field is required.",
      "class": "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    }, {
      "fieldType": "radio",
      "id": "radio_input",
      "name": "radio_input",
      "label": "Radio Input",
      "placeholder": "Select the operation type",
      "required": true,
      "options": {
        "Add": "create",
        "Delete": "delete"
      },
      "type": "radio",
      "message": "Please select a Type.",
      "class": "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    }, {
      "fieldType": "checkbox",
      "id": "checkbox_input",
      "name": "checkbox_input",
      "label": "Checkbox Input",
      "placeholder": "Select the operation type",
      "required": true,
      "options": {
        "Add": "create",
        "Delete": "delete"
      },
      "type": "checkbox",
      "message": "Please select a Type.",
      "class": "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    }]
  }

  table_data = {
    "data": [
      {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "omnis laborum odio"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "non esse culpa molestiae omnis sed optio"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "eaque aut omnis a"
      },
      {
        "userId": 1,
        "id": 6,
        "title": "natus impedit quibusdam illo est"
      },
      {
        "userId": 1,
        "id": 7,
        "title": "quibusdam autem aliquid et et quia"
      },
      {
        "userId": 1,
        "id": 8,
        "title": "qui fuga est a eum"
      },
      {
        "userId": 1,
        "id": 9,
        "title": "saepe unde necessitatibus rem"
      },
      {
        "userId": 1,
        "id": 10,
        "title": "distinctio laborum qui"
      },
      {
        "userId": 2,
        "id": 11,
        "title": "quam nostrum impedit mollitia quod et dolor"
      },
      {
        "userId": 2,
        "id": 12,
        "title": "consequatur autem doloribus natus consectetur"
      },
      {
        "userId": 2,
        "id": 13,
        "title": "ab rerum non rerum consequatur ut ea unde"
      },
      {
        "userId": 2,
        "id": 14,
        "title": "ducimus molestias eos animi atque nihil"
      },
      {
        "userId": 2,
        "id": 15,
        "title": "ut pariatur rerum ipsum natus repellendus praesentium"
      },
      {
        "userId": 2,
        "id": 16,
        "title": "voluptatem aut maxime inventore autem magnam atque repellat"
      },
      {
        "userId": 2,
        "id": 17,
        "title": "aut minima voluptatem ut velit"
      },
      {
        "userId": 2,
        "id": 18,
        "title": "nesciunt quia et doloremque"
      },
      {
        "userId": 2,
        "id": 19,
        "title": "velit pariatur quaerat similique libero omnis quia"
      },
      {
        "userId": 2,
        "id": 20,
        "title": "voluptas rerum iure ut enim"
      },
      {
        "userId": 3,
        "id": 21,
        "title": "repudiandae voluptatem optio est consequatur rem in temporibus et"
      },
      {
        "userId": 3,
        "id": 22,
        "title": "et rem non provident vel ut"
      },
      {
        "userId": 3,
        "id": 23,
        "title": "incidunt quisquam hic adipisci sequi"
      },
      {
        "userId": 3,
        "id": 24,
        "title": "dolores ut et facere placeat"
      },
      {
        "userId": 3,
        "id": 25,
        "title": "vero maxime id possimus sunt neque et consequatur"
      },
      {
        "userId": 3,
        "id": 26,
        "title": "quibusdam saepe ipsa vel harum"
      },
      {
        "userId": 3,
        "id": 27,
        "title": "id non nostrum expedita"
      },
      {
        "userId": 3,
        "id": 28,
        "title": "omnis neque exercitationem sed dolor atque maxime aut cum"
      },
      {
        "userId": 3,
        "id": 29,
        "title": "inventore ut quasi magnam itaque est fugit"
      },
      {
        "userId": 3,
        "id": 30,
        "title": "tempora assumenda et similique odit distinctio error"
      },
      {
        "userId": 4,
        "id": 31,
        "title": "adipisci laborum fuga laboriosam"
      },
      {
        "userId": 4,
        "id": 32,
        "title": "reiciendis dolores a ut qui debitis non quo labore"
      },
      {
        "userId": 4,
        "id": 33,
        "title": "iste eos nostrum"
      },
      {
        "userId": 4,
        "id": 34,
        "title": "cumque voluptatibus rerum architecto blanditiis"
      },
      {
        "userId": 4,
        "id": 35,
        "title": "et impedit nisi quae magni necessitatibus sed aut pariatur"
      },
      {
        "userId": 4,
        "id": 36,
        "title": "nihil cupiditate voluptate neque"
      },
      {
        "userId": 4,
        "id": 37,
        "title": "est placeat dicta ut nisi rerum iste"
      },
      {
        "userId": 4,
        "id": 38,
        "title": "unde a sequi id"
      },
      {
        "userId": 4,
        "id": 39,
        "title": "ratione porro illum labore eum aperiam sed"
      },
      {
        "userId": 4,
        "id": 40,
        "title": "voluptas neque et sint aut quo odit"
      },
      {
        "userId": 5,
        "id": 41,
        "title": "ea voluptates maiores eos accusantium officiis tempore mollitia consequatur"
      },
      {
        "userId": 5,
        "id": 42,
        "title": "tenetur explicabo ea"
      },
      {
        "userId": 5,
        "id": 43,
        "title": "aperiam doloremque nihil"
      },
      {
        "userId": 5,
        "id": 44,
        "title": "sapiente cum numquam officia consequatur vel natus quos suscipit"
      },
      {
        "userId": 5,
        "id": 45,
        "title": "tenetur quos ea unde est enim corrupti qui"
      },
      {
        "userId": 5,
        "id": 46,
        "title": "molestiae voluptate non"
      },
      {
        "userId": 5,
        "id": 47,
        "title": "temporibus molestiae aut"
      },
      {
        "userId": 5,
        "id": 48,
        "title": "modi consequatur culpa aut quam soluta alias perspiciatis laudantium"
      },
      {
        "userId": 5,
        "id": 49,
        "title": "ut aut vero repudiandae voluptas ullam voluptas at consequatur"
      },
      {
        "userId": 5,
        "id": 50,
        "title": "sed qui sed quas sit ducimus dolor"
      },
      {
        "userId": 6,
        "id": 51,
        "title": "odit laboriosam sint quia cupiditate animi quis"
      },
      {
        "userId": 6,
        "id": 52,
        "title": "necessitatibus quas et sunt at voluptatem"
      },
      {
        "userId": 6,
        "id": 53,
        "title": "est vel sequi voluptatem nemo quam molestiae modi enim"
      },
      {
        "userId": 6,
        "id": 54,
        "title": "aut non illo amet perferendis"
      },
      {
        "userId": 6,
        "id": 55,
        "title": "qui culpa itaque omnis in nesciunt architecto error"
      },
      {
        "userId": 6,
        "id": 56,
        "title": "omnis qui maiores tempora officiis omnis rerum sed repellat"
      },
      {
        "userId": 6,
        "id": 57,
        "title": "libero excepturi voluptatem est architecto quae voluptatum officia tempora"
      },
      {
        "userId": 6,
        "id": 58,
        "title": "nulla illo consequatur aspernatur veritatis aut error delectus et"
      },
      {
        "userId": 6,
        "id": 59,
        "title": "eligendi similique provident nihil"
      },
      {
        "userId": 6,
        "id": 60,
        "title": "omnis mollitia sunt aliquid eum consequatur fugit minus laudantium"
      },
      {
        "userId": 7,
        "id": 61,
        "title": "delectus iusto et"
      },
      {
        "userId": 7,
        "id": 62,
        "title": "eos ea non recusandae iste ut quasi"
      },
      {
        "userId": 7,
        "id": 63,
        "title": "velit est quam"
      },
      {
        "userId": 7,
        "id": 64,
        "title": "autem voluptatem amet iure quae"
      },
      {
        "userId": 7,
        "id": 65,
        "title": "voluptates delectus iure iste qui"
      },
      {
        "userId": 7,
        "id": 66,
        "title": "velit sed quia dolor dolores delectus"
      },
      {
        "userId": 7,
        "id": 67,
        "title": "ad voluptas nostrum et nihil"
      },
      {
        "userId": 7,
        "id": 68,
        "title": "qui quasi nihil aut voluptatum sit dolore minima"
      },
      {
        "userId": 7,
        "id": 69,
        "title": "qui aut est"
      },
      {
        "userId": 7,
        "id": 70,
        "title": "et deleniti unde"
      },
      {
        "userId": 8,
        "id": 71,
        "title": "et vel corporis"
      },
      {
        "userId": 8,
        "id": 72,
        "title": "unde exercitationem ut"
      },
      {
        "userId": 8,
        "id": 73,
        "title": "quos omnis officia"
      },
      {
        "userId": 8,
        "id": 74,
        "title": "quia est eius vitae dolor"
      },
      {
        "userId": 8,
        "id": 75,
        "title": "aut quia expedita non"
      },
      {
        "userId": 8,
        "id": 76,
        "title": "dolorem magnam facere itaque ut reprehenderit tenetur corrupti"
      },
      {
        "userId": 8,
        "id": 77,
        "title": "cupiditate sapiente maiores iusto ducimus cum excepturi veritatis quia"
      },
      {
        "userId": 8,
        "id": 78,
        "title": "est minima eius possimus ea ratione velit et"
      },
      {
        "userId": 8,
        "id": 79,
        "title": "ipsa quae voluptas natus ut suscipit soluta quia quidem"
      },
      {
        "userId": 8,
        "id": 80,
        "title": "id nihil reprehenderit"
      },
      {
        "userId": 9,
        "id": 81,
        "title": "quibusdam sapiente et"
      },
      {
        "userId": 9,
        "id": 82,
        "title": "recusandae consequatur vel amet unde"
      },
      {
        "userId": 9,
        "id": 83,
        "title": "aperiam odio fugiat"
      },
      {
        "userId": 9,
        "id": 84,
        "title": "est et at eos expedita"
      },
      {
        "userId": 9,
        "id": 85,
        "title": "qui voluptatem consequatur aut ab quis temporibus praesentium"
      },
      {
        "userId": 9,
        "id": 86,
        "title": "eligendi mollitia alias aspernatur vel ut iusto"
      },
      {
        "userId": 9,
        "id": 87,
        "title": "aut aut architecto"
      },
      {
        "userId": 9,
        "id": 88,
        "title": "quas perspiciatis optio"
      },
      {
        "userId": 9,
        "id": 89,
        "title": "sit optio id voluptatem est eum et"
      },
      {
        "userId": 9,
        "id": 90,
        "title": "est vel dignissimos"
      },
      {
        "userId": 10,
        "id": 91,
        "title": "repellendus praesentium debitis officiis"
      },
      {
        "userId": 10,
        "id": 92,
        "title": "incidunt et et eligendi assumenda soluta quia recusandae"
      },
      {
        "userId": 10,
        "id": 93,
        "title": "nisi qui dolores perspiciatis"
      },
      {
        "userId": 10,
        "id": 94,
        "title": "quisquam a dolores et earum vitae"
      },
      {
        "userId": 10,
        "id": 95,
        "title": "consectetur vel rerum qui aperiam modi eos aspernatur ipsa"
      },
      {
        "userId": 10,
        "id": 96,
        "title": "unde et ut molestiae est molestias voluptatem sint"
      },
      {
        "userId": 10,
        "id": 97,
        "title": "est quod aut"
      },
      {
        "userId": 10,
        "id": 98,
        "title": "omnis quia possimus nesciunt deleniti assumenda sed autem"
      },
      {
        "userId": 10,
        "id": 99,
        "title": "consectetur ut id impedit dolores sit ad ex aut"
      },
      {
        "userId": 10,
        "id": 100,
        "title": "enim repellat iste"
      }
    ],
    "headers": ['userId', 'id', 'title'],
    "class": "table-hover",
    "options": {
      "dropdown_option": ['Edit','Delete'],
      "Edit":{
        "url": "https://gaana.com/"
      },
      "Delete": {
        "function": "CancelMethod"
      }
    },
    "checkbox": "id",
    "search":{
      "class": "col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
    },
    "bulk_actions": {
      "button_group": true,
      "class": "col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3",
      "buttons" : [{
        "name":"delete",
        "class": "btn-danger pb-0",
        "title":"Delete",
        "function":"CancelMethod"
      },{
        "icon":"add_box",
        "class": "btn-primary",
        "title":"Add",
        "function":""
      }]
    },
    "pagination": {
      "itemsPerPage": 10,
      "currentPage": 1
    }
  }
  
  testMethod($event){
    console.log("In test method");
    this[$event]();
  }

  CancelMethod(){
    console.log("In Cancel method");
  }

  receiveMessage($event) {
    console.log("In parent component ",$event);
  }

  closeResult: string;

  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
    
}
