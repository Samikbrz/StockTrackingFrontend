import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { User } from 'src/app/models/user';
import { UserOperationClaim } from 'src/app/models/userOperationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-operation-claim-edit',
  templateUrl: './user-operation-claim-edit.component.html',
  styleUrls: ['./user-operation-claim-edit.component.css']
})
export class UserOperationClaimEditComponent implements OnInit {

  users:User[];
  operationClaims:OperationClaim[];
  userOperaitonClaimEditForm:FormGroup;
  userOperationClaim:UserOperationClaim;

  constructor(
    private formBuilder:FormBuilder,
    private userOperationClaimService:UserOperationClaimService,
    private operationClaimService:OperationClaimService,    
    private userService:UserService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userOperationClaimId']) {
        this.getUserOperaitonClaimById(params['userOperationClaimId']);
      }
    });
   }

  ngOnInit(): void {
    this.createUserOperationClaimEditForm();
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

  createUserOperationClaimEditForm() {
    this.userOperaitonClaimEditForm = this.formBuilder.group({   
      userId:['',Validators.required],
      operationClaimId:['',Validators.required],                     
    });   
  }

  updateUserOperationClaim(){
    if (this.userOperaitonClaimEditForm.valid) {
      let userOperaitonClaimModel = Object.assign({}, this.userOperaitonClaimEditForm.value);  
      userOperaitonClaimModel.id=this.userOperationClaim.id;          
      this.userOperationClaimService.update(userOperaitonClaimModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();         
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });      
    }
  }

  getUserOperaitonClaimById(id:number){    
    this.userOperationClaimService.getUserOperationClaimById(id).subscribe((response)=>{
      this.userOperationClaim=response.data[0];           
      this.userOperaitonClaimEditForm.setValue({
        userId:this.userOperationClaim.userId,
        operationClaimId:this.userOperationClaim.operationClaimId,        
      })
    });
  }

}
