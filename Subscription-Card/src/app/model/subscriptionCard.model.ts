import { offer } from "./offer.model";


export interface subscription{
  id ? : number ;
  type ? : string ;
  title ? :  string ;
  price ? : number ;
  offers ? : offer[] ;
}
