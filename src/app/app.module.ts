import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PaymentComponent } from './payment/payment.component';
import { FundsComponent } from './funds/funds.component';
import { FooterComponent } from './footer/footer.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AdmincompanyComponent } from './admincompany/admincompany.component';
import { TradenowComponent } from './tradenow/tradenow.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { UsertradenowComponent } from './usertradenow/usertradenow.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ChartComponent } from './chart/chart.component';
import { ChartModule, StockChartAllModule, ChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, TooltipService, LegendService, CandleSeriesService, CrosshairService, PeriodSelectorService } from '@syncfusion/ej2-angular-charts';
import { UserportfolioComponent } from './userportfolio/userportfolio.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewsComponent,
    PaymentComponent,
    FundsComponent,
    FooterComponent,
    CreatecompanyComponent,
    AddcompanyComponent,
    AdmincompanyComponent,
    TradenowComponent,
    ViewuserComponent,
    UpdatecompanyComponent,
    UsertradenowComponent,
    WatchlistComponent,
    ChartComponent,
    UserportfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ChartModule,
    StockChartAllModule,
    ChartAllModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule

  ],
  providers: [authInterceptorProviders,
    CategoryService,
    LegendService,
    CandleSeriesService,
    TooltipService,
    CrosshairService,
    PeriodSelectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }