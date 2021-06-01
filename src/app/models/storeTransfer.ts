export interface StoreTransfer{
    id:number;
    storeTransferNo:number;
    date:Date;
    sourceStoreId:number;
    sourceShelfId:number;
    sourceDrawerId:number;
    targetStoreId:number;
    targetShelfId:number;
    targetDrawerId:number;
    userId:number;
}