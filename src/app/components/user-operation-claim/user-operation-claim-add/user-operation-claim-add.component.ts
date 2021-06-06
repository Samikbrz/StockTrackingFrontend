import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { User } from 'src/app/models/user';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrls: ['./user-operation-claim-add.component.css']
})
export class UserOperationClaimAddComponent implements OnInit {

  users:User[];
  operationClaims:OperationClaim[];
  userOperaitonClaimAddForm:FormGroup;  

  constructor(
    private formBuilder:FormBuilder,
    private userOperationClaimService:UserOperationClaimService,
    private operationClaimService:OperationClaimService,    
    private userService:UserService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createUserOperationClaimAddForm();
    this.getUsers();
    this.getOperationClaims();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users=response.data
    })
  }

  getOperationClaims(){
    this.operationClaimService.getOperationClaims().subscribe(response=>{
      this.operationClaims=response.data
    })
  }

  createUserOperationClaimAddForm() {
    this.userOperaitonClaimAddForm = this.formBuilder.group({   
      userId:['',Validators.required],
      operationClaimId:['',Validators.required],                     
    });   
  }

  addUserOperationClaim(){
    if (this.userOperaitonClaimAddForm.valid) {
      let operaitonClaimModel = Object.assign({}, this.userOperaitonClaimAddForm.value);          
      this.userOperationClaimService.add(operaitonClaimModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();         
      },responseError=>{  
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata");
          }
        }       
      });      
    }
  }
}
