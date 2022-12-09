import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../SERVICES/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  product :any;

  constructor(private cp :ProductService,private dio:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.product=this.cp.getById(id).subscribe(response =>{
      this.product=response;
    });
  }

 
  public updateProduct(){
    const id= this.route.snapshot.paramMap.get('id');
    
    this.cp.updateProduct(id, this.product).subscribe((response) => {
      alert("Update Successfully");
      this.dio.navigate(['/product']);
      console.log(response);
    })
    /*error = console.log()*/
  }

}
