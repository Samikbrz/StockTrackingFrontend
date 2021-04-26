import {ProductUnit} from "./productunit";
import { ResponseModel } from "./responseModel";

export interface ProductUnitResponseModel extends ResponseModel{
    data:ProductUnit[];    
}