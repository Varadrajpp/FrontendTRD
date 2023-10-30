import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchdrugsComponent } from './searchdrugs/searchdrugs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewdrugsComponent } from './viewdrugs/viewdrugs.component';
import { BuydrugsComponent } from './buydrugs/buydrugs.component';
import { AddsuppliersComponent } from './admin/addsuppliers/addsuppliers.component';
import { DeletesuppliersComponent } from './admin/deletesuppliers/deletesuppliers.component';
import { ViewsuppliersComponent } from './admin/viewsuppliers/viewsuppliers.component';
import { ViewordersComponent } from './admin/vieworders/vieworders.component';
import { SalesreportComponent } from './admin/salesreport/salesreport.component';
import { AdheaderComponent } from './admin/adheader/adheader.component';
import { DoheaderComponent } from './doctor/doheader/doheader.component';
import { CsheaderComponent } from './customer/csheader/csheader.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdddrugsComponent } from './adddrugs/adddrugs.component';
import { DeletedrugsComponent } from './admin/deletedrugs/deletedrugs.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { OrderdeliveryComponent } from './admin/orderdelivery/orderdelivery.component';
import { EditdrugsComponent } from './editdrugs/editdrugs.component';
import { SearchsuppliersComponent } from './admin/searchsuppliers/searchsuppliers.component';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { VerifyorderComponent } from './verifyorder/verifyorder.component';
import { LoginService } from './login.service';
import { TokenInterceptorService } from './services/TokenInterceptorService.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    DoctorComponent,
    CustomerComponent,
    SearchdrugsComponent,
    ViewdrugsComponent,
    BuydrugsComponent,
    AddsuppliersComponent,
    DeletesuppliersComponent,
    ViewsuppliersComponent,
    ViewordersComponent,
    SalesreportComponent,
    AdheaderComponent,
    DoheaderComponent,
    CsheaderComponent,
    AdddrugsComponent,
    DeletedrugsComponent,
    OrderdeliveryComponent,
    EditdrugsComponent,
    SearchsuppliersComponent,
    PaymentcomponentComponent,
    VerifyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
    MatSnackBarModule, 
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR }),
    
  ],
  providers: [LoginService,{

    provide: HTTP_INTERCEPTORS,

    useClass: TokenInterceptorService,

    multi: true,

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
