import { WatchlistComponent } from './watchlist/watchlist.component';
import { UserportfolioComponent } from './userportfolio/userportfolio.component';
import { ChartComponent } from './chart/chart.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UsertradenowComponent } from './usertradenow/usertradenow.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';
import { TradenowComponent } from './tradenow/tradenow.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FundsComponent } from './funds/funds.component';
import { CreatecompanyComponent } from './createcompany/createcompany.component';
import { AdmincompanyComponent } from './admincompany/admincompany.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'addcompany', component:AddcompanyComponent},
  {path:'admincompany' , component:AdmincompanyComponent},
  {path:'createcompany' , component:CreatecompanyComponent},
  {path:'funds', component:FundsComponent},
  {path:'home', component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'news', component:NewsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'tradenow', component:TradenowComponent},
  {path:'updatecompany/:id', component:UpdatecompanyComponent},
  {path:'usertradenow', component:UsertradenowComponent},
  {path:'viewuser', component:ViewuserComponent},
  {path:'chart', component:ChartComponent},
  {path:'userportfolio', component:UserportfolioComponent},
  {path:'watchlist', component:WatchlistComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
