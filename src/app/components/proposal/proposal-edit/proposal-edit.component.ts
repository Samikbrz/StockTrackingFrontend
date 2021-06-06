import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { Proposal } from 'src/app/models/proposal';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProposalService } from 'src/app/services/proposal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proposal-edit',
  templateUrl: './proposal-edit.component.html',
  styleUrls: ['./proposal-edit.component.css']
})
export class ProposalEditComponent implements OnInit {

  proposalEditForm:FormGroup;
  companies:Company[];
  users:User[];
  proposal:Proposal;

  constructor(
    private formBuilder:FormBuilder,
    private proposalService:ProposalService,
    private userService:UserService,
    private companyService:CompanyService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['proposalId']) {
        this.getProposalById(params['proposalId']);
      }
    });
  }

  ngOnInit(): void {
    this.createProposalEditForm();
    this.getCompanies();
    this.getUsers();
  } 

  createProposalEditForm() {
    this.proposalEditForm = this.formBuilder.group({     
      proposalNo:['',Validators.required],
      date:['',Validators.required],
      userId:['',Validators.required],
      companyId:['',Validators.required]                 
    });
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(response=>{
      this.companies=response.data
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users=response.data
    })
  }

  updateProposal(){
    if (this.proposalEditForm.valid) {
      let proposalModel = Object.assign({}, this.proposalEditForm.value);
      proposalModel.id=this.proposal.id;
      this.proposalService.update(proposalModel).subscribe((response)=>{
        this.toastrService.success("Teklif başarı ile güncellendi","Başarılı");   
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

  getProposalById(proposalId:number){
    this.proposalService.getProposalById(proposalId).subscribe((response)=>{
      this.proposal=response.data[0];
      this.proposalEditForm.setValue({
        proposalNo:this.proposal.proposalNo,
        date:this.proposal.date,
        userId:this.proposal.userId,
        companyId:this.proposal.companyId,        
      })
    });
  }

}
