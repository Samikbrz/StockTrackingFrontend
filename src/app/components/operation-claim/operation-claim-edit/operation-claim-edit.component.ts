import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-edit',
  templateUrl: './operation-claim-edit.component.html',
  styleUrls: ['./operation-claim-edit.component.css']
})
export class OperationClaimEditComponent implements OnInit {

  operationClaimUpdateForm:FormGroup;    
  operationClaim:OperationClaim;

  constructor(
    private toastrService:ToastrService,
    private operaitonClaimService:OperationClaimService,    
    private activatedRoute: ActivatedRoute,
    private formBuilder:FormBuilder) {
      this.activatedRoute.params.subscribe((params) => {
        if (params['operationClaimId']) {
          this.getOperationClaimById(params['operationClaimId']);
        }
      });
    }

  ngOnInit(): void {
    this.createModelEditForm();    
  }

  createModelEditForm(){
    this.operationClaimUpdateForm=this.formBuilder.group({
      name:['',Validators.required],            
    })
  }

  updateOperaitonClaim(){    
    if(this.operationClaimUpdateForm.valid){
      let operationClaimModel = Object.assign({}, this.operationClaimUpdateForm.value)
      operationClaimModel.id=this.operationClaim.id;
      this.operaitonClaimService.update(operationClaimModel).subscribe(
        (response) => {        
          this.toastrService.success(response.message,'Başarılı');          
          window.location.reload();                  
        },responseError=>{                
          if(responseError.error.Message.length>0){
            this.toastrService.error(responseError.error.Message,"Hata");
          }       
        }); 
    }else{
      this.toastrService.error('Form eksik', 'Hata');
    }
  }

  getOperationClaimById(operaitonClaimId:number){
    this.operaitonClaimService.getOperationClaimById(operaitonClaimId).subscribe((response)=>{
      this.operationClaim=response.data[0];
      this.operationClaimUpdateForm.setValue({
        name:this.operationClaim.name,         
      })
    });
  }

}
