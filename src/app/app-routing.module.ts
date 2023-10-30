import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchdrugsComponent } from './searchdrugs/searchdrugs.component';
import { ViewdrugsComponent } from './viewdrugs/viewdrugs.component';
import { BuydrugsComponent } from './buydrugs/buydrugs.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CustomerComponent } from './customer/customer.component';
import { SalesreportComponent } from './admin/salesreport/salesreport.component';
import { AdddrugsComponent } from './adddrugs/adddrugs.component';
import { DeletedrugsComponent } from './admin/deletedrugs/deletedrugs.component';
import { OrderdeliveryComponent } from './admin/orderdelivery/orderdelivery.component';
import { AddsuppliersComponent } from './admin/addsuppliers/addsuppliers.component';
import { ViewsuppliersComponent } from './admin/viewsuppliers/viewsuppliers.component';
import { EditdrugsComponent } from './editdrugs/editdrugs.component';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { DeletesuppliersComponent } from './admin/deletesuppliers/deletesuppliers.component';
import { VerifyorderComponent } from './verifyorder/verifyorder.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 // {path:'/',redirectTo:'/home',pathMatch:'full'},
   
   {path:'',component:HomepageComponent},
   {path:'home',component:HomepageComponent},
  { path: 'login', component: LoginComponent },
   { path: 'reg', component: RegisterComponent },
   { path: 'search', component: SearchdrugsComponent },
   {path:'',redirectTo:'',pathMatch:'full'},
   { path: 'admin/search-drugs',component: SearchdrugsComponent }, 
   { path: 'admin/view-drugs',component: ViewdrugsComponent }, 
   { path: 'admin/add-drugs',component: AdddrugsComponent }, 
   { path: 'admin/edit-drugs',component: EditdrugsComponent }, 
   { path: 'admin/delete-drugs',component: DeletedrugsComponent },
   { path: 'admin/pickup-order',component: OrderdeliveryComponent },
   { path: 'admin/edit-suppliers',component: AddsuppliersComponent },
   { path: 'admin/view-suppliers',component: ViewsuppliersComponent },
   { path: 'admin/delete-suppliers',component: DeletesuppliersComponent },
   { path: 'admin/view-sales-report',component: SalesreportComponent },
   {path:'admin/verify-doctors-order' ,component:VerifyorderComponent},
   {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] } // Specify allowed roles for this route
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [AuthGuard],
    data: { roles: ['doctor'] } // Specify allowed roles for this route
  },
  
   { path: 'customer/search-drugs',component: SearchdrugsComponent }, 
   { path: 'customer/view-drugs',component: ViewdrugsComponent }, 
   { path: 'customer/buy-drugs',component: BuydrugsComponent },
  //  { path: 'admin', component: AdminComponent },
   { path: 'doctor/search-drugs',component: SearchdrugsComponent }, 
   { path: 'doctor/view-drugs',component: ViewdrugsComponent }, 
   { path: 'doctor/buy-drugs',component: BuydrugsComponent } ,
   //{ path: 'doctor', component: DoctorComponent },
   {path:'buy',component:PaymentcomponentComponent},
  { path: 'customer', component: CustomerComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
