import { StockStore } from "./stockStore";

export interface StockStoreDetail extends StockStore{
    productName:string;
    storeName:string;
    shelfName:string;
    drawerName:string
    productUnitName:string
}