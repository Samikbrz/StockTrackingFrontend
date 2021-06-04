import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-add',
  templateUrl: './operation-claim-add.component.html',
  styleUrls: ['./operation-claim-add.component.css']
})
export class OperationClaimAddComponent implements OnInit {

  operationClaimAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOperationAddAddForm();
  }

  createOperationAddAddForm() {
    this.operationClaimAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addOperationClaim() {
    if (this.operationClaimAddForm.valid) {
      let operationClaimModel = Object.assign({}, this.operationClaimAddForm.value);
      this.operationClaimService.add(operationClaimModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");  
        window.location.reload();      
      },(responseError)=>{    
        this.toastrService.error(responseError.error.message)
      });      
    }
  }
}
