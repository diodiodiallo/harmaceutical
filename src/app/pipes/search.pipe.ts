import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product: Product[], SearchValue:string): any{
    if(!product || !SearchValue){
    return product;
  }else{
  return product.filter(produc => produc.name.toLocaleLowerCase().includes(SearchValue.toLocaleLowerCase()));
  }
}
}
