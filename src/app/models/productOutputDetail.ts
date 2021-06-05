import { ProductOutput } from "./productOutput";

export interface ProductOutputDetail extends ProductOutput{
    userName:string;
    companyName:string;
    productName:String
}