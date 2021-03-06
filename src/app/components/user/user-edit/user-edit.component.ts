import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditForm:FormGroup;   
  user:User;

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,        
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {    
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getUserById(params['id']);
      }
    });
  }

  ngOnInit(): void {
    this.createUserEditForm();      
  } 

  createUserEditForm() {
    this.userEditForm = this.formBuilder.group({     
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],        
    });
  }  

  updateUser(){
    if (this.userEditForm.valid) {
      let userModel = Object.assign({}, this.userEditForm.value);      
      userModel.id=this.user.id;
      this.userService.update(userModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });      
    }
  }

  getUserById(id:number){
    this.userService.getUserById(id).subscribe((response)=>{
      this.user=response.data[0];
      this.userEditForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        email:this.user.email,          
      })
    });
  }

}
