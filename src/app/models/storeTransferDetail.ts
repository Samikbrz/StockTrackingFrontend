import { StoreTransfer } from "./storeTransfer";

export interface StoreTransferDetail extends StoreTransfer{
    sourceStoreName:string;
    sourceShelfName:string;
    sourceDrawerName:string;
    TargetStoreName:string;
    TargetShelfName:string;
    TargetDrawerName:string;
    UserName:string;
}
