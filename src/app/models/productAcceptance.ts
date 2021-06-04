export interface ProductAcceptance{
    id:number;
    productName:string;
    barcode:string
    productRegistrationNumber:string;
    acceptanceDate:Date;
    userId:number;    
    companyId:number;
    count:number;
    unitPrice:number;
    totalPrice:number;
}
