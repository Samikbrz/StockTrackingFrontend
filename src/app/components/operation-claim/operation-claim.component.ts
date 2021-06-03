import { Component, OnInit } from '@angular/core';
import { OperationClaim } from 'src/app/models/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim',
  templateUrl: './operation-claim.component.html',
  styleUrls: ['./operation-claim.component.css']
})
export class OperationClaimComponent implements OnInit {

  operationClaims:OperationClaim[];
  constructor(private operationClaimService:OperationClaimService) { }

  ngOnInit(): void {
    this.getOperationClaims();
  }

  getOperationClaims(){
    this.operationClaimService.getOperationClaims().subscribe(response=>{
      this.operationClaims=response.data;
    })
  }
}
