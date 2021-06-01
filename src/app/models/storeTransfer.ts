export interface StoreTransfer{
    id:number;
    transferNo:string;
    date:Date;
    sourceStoreId:number;
    sourceShelfId:number;
    sourceDrawerId:number;
    targetStoreId:number;
    targetShelfId:number;
    targetDrawerId:number;
    userId:number;
}