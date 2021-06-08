import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { Proposal } from 'src/app/models/proposal';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProposalService } from 'src/app/services/proposal.service';
import { StockStoreService } from 'src/app/services/stock-store.service';
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
  stockStores:StockStoreDetail[];  

  constructor(
    private formBuilder:FormBuilder,
    private proposalService:ProposalService,
    private companyService:CompanyService,
    private userService:UserService,
    private toastrService:ToastrService,
    private stockStoreService:StockStoreService
  ) { }

  ngOnInit(): void {   
    this.createProposalAddForm();    
    this.getCompanies();
    this.getUsers();   
    this.getStockStores();
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

  getStockStores(){
    this.stockStoreService.getStockStores().subscribe(response=>{
      this.stockStores=response.data;
    })
  }

  createProposalAddForm() {
    this.proposalAddForm = this.formBuilder.group({  
      barcode:['',Validators.required],
      count:['',Validators.required],
      proposalPrice:['',Validators.required],
      proposalNo:['',Validators.required],
      date:['',Validators.required],
      userId:['',Validators.required],
      companyId:['',Validators.required]               
    });   
  }

  addProposal(){
    console.log(this.proposalAddForm.value)
    if (this.proposalAddForm.valid) {      
      let proposalModel = Object.assign({}, this.proposalAddForm.value);      
      console.log(this.proposalAddForm.value)
      this.proposalService.add(proposalModel).subscribe((response)=>{
        this.toastrService.success("Teklif başarı ile oluşturuldu","Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });       
    }else{
      this.toastrService.error("Form eksik!","Hata");
    }
  }

}
