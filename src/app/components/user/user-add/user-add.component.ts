import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/registerModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userAddForm:FormGroup;   
  registerModel:RegisterModel;
  
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,        
    private toastrService:ToastrService,
  ) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({     
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],  
      password:['',Validators.required],      
    });
  }

  addUser(){
    if (this.userAddForm.valid) {
      let userModel = Object.assign({}, this.userAddForm.value);
      this.authService.register(userModel).subscribe((response)=>{
        this.toastrService.success("Kullanıcı eklendi","Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });      
    }
  }

}
