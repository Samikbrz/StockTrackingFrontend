import { StoreTransfer } from "./storeTransfer";

export interface StoreTransferDetail extends StoreTransfer{
    sourceStoreName:string;
    sourceShelfName:string;
    sourceDrawerName:string;
    targetStoreName:string;
    targetShelfName:string;
    targetDrawerName:string;
    userName:string;
}
