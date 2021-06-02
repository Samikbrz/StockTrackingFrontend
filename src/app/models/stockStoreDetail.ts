import { StockStore } from "./stockStore";

export interface StockStoreDetail extends StockStore{
    storeName:string;
    shelfName:string;
    drawerName:string
}