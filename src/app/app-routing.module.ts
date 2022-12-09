import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutasComponent } from './aboutas/aboutas.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
 {path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent},
 {path:'product',component:ProductsComponent},
 {path:'aboutas',component:AboutasComponent},
 {path:'create',component:CreateComponent},
 {path:'detail/:id',component:DetailComponent},
 {path:'update/:id',component:UpdateComponent},
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
