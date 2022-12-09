import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../SERVICES/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product:Product[]=[];
  id!:number;
  SearchValue!:string;
  
 
  constructor( private service:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.getAll();
    
  }
  getAll() {
    this.service.getAllProduct().subscribe(prod=>{
      this.product=prod;
    });
   
  }
 
  detailsProduct(id: number){
    this.router.navigate(['/detail'])
  }
  public delete(id: number){
    this.service.deleteProduct(id).subscribe((response) => {
      alert("Delete Successfully");
      console.log(response);
      this.reload();
    })
  }
  reload(){
    window.location.reload();
  }
  update(id: number){
    this.router.navigate(['/update'])
  }
  }


