import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

    title = 'userCrudOperations';
    isEdit:boolean=false;
    userForm : FormGroup;
    singleUser:Object = {};
    userList = [
        {
            id: 1,
            name: 'Ram',
            email: 'ram@gmail.com',
            contact: 98765432
        },
        {
            id: 2,
            name: 'Shyam',
            email: 'shyam@gmail.com',
            contact: 9877487583
        },
        {
            id: 3,
            name: 'Mohan',
            email: 'mohan@gmail.com',
            contact: 9377485785
        },
        {
            id: 4,
            name: 'Sohan',
            email: 'sohan@gmail.com',
            contact: 88647567
        },
        {
            id: 5,
            name: 'Seeta',
            email: 'seeta@gmail.com',
            contact: 83464736
        }
    ]

    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.userValidation();
    }

    userValidation (data=null) {

        let id = data && data.id ? data.id : null;
        let name = data && data.name ? data.name : null;
        let email = data && data.email ? data.email : null;
        let contact = data && data.contact ? data.contact : null;

        this.userForm = this.fb.group({
            'id' : [id],
            'name' : [name],
            'email' : [email],
            'contact' : [contact]
        });
    }
    
    editUser (value, index) {
        this.isEdit=true;
		this.userValidation(this.userList[index]);
    }

    editOrAdd () {
		let value = this.userForm.getRawValue()
		let index = this.userList.findIndex(val => {
			console.log(val.id, value.id)
			return val.id === value.id;
		})
		//index = a.findIndex(x => x.prop2 ==="yutu");
		if(!this.isEdit){
			this.userList.push(value);
			console.log('add', value)
			
		}else{
			console.log(index)

			this.userList.splice(index, 1, value)
		}
    }

    deleteUser (index) {
		this.userList.splice(index, 1)
    }

}
