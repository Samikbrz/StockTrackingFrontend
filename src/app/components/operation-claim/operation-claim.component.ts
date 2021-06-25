import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim',
  templateUrl: './operation-claim.component.html',
  styleUrls: ['./operation-claim.component.css']
})
export class OperationClaimComponent implements OnInit {

  operationClaims:OperationClaim[];
  constructor(private operationClaimService:OperationClaimService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getOperationClaims();
  }

  getOperationClaims(){
    this.operationClaimService.getOperationClaims().subscribe(response=>{
      this.operationClaims=response.data;
    })
  }

  deleteOperationClaim(operaitonClaim:OperationClaim){
    if(window.confirm("Emin misiniz?")){
      this.operationClaimService.delete(operaitonClaim).subscribe(response=>{
        this.toastrService.success(response.message,"Deleted")
        window.location.reload();
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });
    }    
  }
}
