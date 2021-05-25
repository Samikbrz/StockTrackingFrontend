import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/models/proposal';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  proposals:Proposal[]=[];

  constructor(private proposalService:ProposalService) { }

  ngOnInit(): void {
    this.getProposals();
  }

  getProposals() {
    this.proposalService.getProposals().subscribe(response=>{
      this.proposals=response.data
    })
  }

}
