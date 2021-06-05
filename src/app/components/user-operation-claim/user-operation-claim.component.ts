import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaim } from 'src/app/models/userOperationClaim';
import { UserOperationClaimDetail } from 'src/app/models/userOperationClaimDetail';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim',
  templateUrl: './user-operation-claim.component.html',
  styleUrls: ['./user-operation-claim.component.css']
})
export class UserOperationClaimComponent implements OnInit {

  userOperationClaims:UserOperationClaimDetail[];

  constructor(private userOperationClaimService:UserOperationClaimService,
    private toastrService:ToastrService,
    private router:Router,) { }

  ngOnInit(): void {
    this.getUserOperationClaims();    
  }

  getUserOperationClaims(){
    this.userOperationClaimService.getUserOperationClaims().subscribe(response=>{
      this.userOperationClaims=response.data;
    })
  }

  deleteUserOperationClaim(useroperationclaim:UserOperationClaim){
    if(window.confirm("Kullanıcı ve yetkiyi silmek istediğinizden emin misiniz?")){
      this.userOperationClaimService.delete(useroperationclaim).subscribe(response=>{
        this.toastrService.success("Silindi","Başarılı")
        window.location.reload();
      })
    }
  }

}
