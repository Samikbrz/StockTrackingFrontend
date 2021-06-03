import { UserOperationClaim } from "./userOperationClaim";

export interface UserOperationClaimDetail extends UserOperationClaim{    
    userName:string;
    operationClaimName:string;
}