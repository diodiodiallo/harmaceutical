import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../SERVICES/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product :Product= new Product();

  constructor(private cp :ProductService,private dio:Router) { }

  ngOnInit(): void {
    
  }
 
  public saveProduct(){
    this.cp.createPhone(this.product).subscribe((response) => {
      alert("Save Successfully");
      this.dio.navigate(['/product']);
      console.log(response);
    })
    /*error = console.log()*/
  }

}
