import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { Proposal } from 'src/app/models/proposal';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProposalService } from 'src/app/services/proposal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proposal-add',
  templateUrl: './proposal-add.component.html',
  styleUrls: ['./proposal-add.component.css']
})
export class ProposalAddComponent implements OnInit {

  proposalAddForm:FormGroup;  
  companies:Company[];
  users:User[];   
  proposals:Proposal[];
  proposalNumber=0;

  constructor(
    private formBuilder:FormBuilder,
    private proposalService:ProposalService,
    private companyService:CompanyService,
    private userService:UserService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {   
    this.createProposalAddForm();
    this.getLastProposal();
    this.getCompanies();
    this.getUsers();   
  }   

  getLastProposal(){
    this.proposalService.getProposals().subscribe(response=>{
      this.proposals=response.data;
      var lastproposal=this.proposals.pop();
      this.proposalNumber=lastproposal.proposalNo+1;
      this.proposalAddForm.setValue({
        proposalNo:this.proposalNumber,
        date:null,
        userId:null,
        companyId:null                   
      }) 
    })
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

  createProposalAddForm() {
    this.proposalAddForm = this.formBuilder.group({   
      proposalNo:['',Validators.required],
      date:['',Validators.required],
      userId:['',Validators.required],
      companyId:['',Validators.required]               
    });   
  }

  addProposal(){
    if (this.proposalAddForm.valid) {
      let proposalModel = Object.assign({}, this.proposalAddForm.value);
      this.proposalService.add(proposalModel).subscribe((response)=>{
        this.toastrService.success("Teklif başarı ile oluşturuldu","Başarılı");   
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
