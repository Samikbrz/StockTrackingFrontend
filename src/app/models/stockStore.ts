export interface StockStore{
    id:number;
    productName:string;
    unitPrice:number;
    currency:string;
    barcode:string;
    storeId:number;
    shelfId:number;
    drawerId:number;
    count:number;
}