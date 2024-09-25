import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {routes} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import {OrderComponent} from "./components/order/order.component";
import {ClientComponent} from "./components/client/client.component";
import {CardComponent} from "./components/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from "./components/_guard/auth.guard";
import {AuthInterceptor} from "./components/_interceptors/auth.interceptor";
import {httpInterceptorProviders} from "./components/_interceptors/provider";
import {ReportComponent} from "./components/report/report.component";
import {AccessDeniedComponent} from "./components/utils/accessDenied.component";

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    OrderComponent,
    ClientComponent,
    CardComponent,
    ReportComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [AuthGuard, AuthInterceptor, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
