import { Proposal } from "./proposal";

export interface ProposalDetail extends Proposal{   
    userName:string;
    companyName:string
    barcode:string
}