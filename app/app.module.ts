import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {RouterModule, Routes} from "@angular/router"
import {DashboardComponent} from "./dashboard.component";


const dashboardRoutes: Routes = [{
    path:'dashboard',
    component:DashboardComponent,
    children:[{
        path:'',
        children:[
            {path:'detail/:id',component:HeroDetailComponent}
        ]
    }]
}];
@NgModule({
   imports: [BrowserModule,
      FormsModule,
     /* RouterModule.forRoot([{
         path:'heroes',
         component:HeroesComponent
      },{
         path:'dashboard',
         component:DashboardComponent
      },{
         path:'',
         redirectTo:'/dashboard',
         pathMatch:'full'
      },{
         path:'detail/:id',
         component:HeroDetailComponent
      }])*/
     RouterModule.forRoot([{
        path:'',
        component:HeroesComponent
     },{
         path:'heroes',
         redirectTo:'',
         pathMatch:'full'
     },{
        path:'dashboard',
        component:DashboardComponent
     }]),
       RouterModule.forChild(dashboardRoutes)
   ],
   declarations: [AppComponent,HeroDetailComponent,HeroesComponent,DashboardComponent],
   providers:[HeroService],
   bootstrap: [AppComponent]
})
export class AppModule{
}
