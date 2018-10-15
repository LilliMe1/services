import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LpComponent } from './lp/lp.component';
import { SolMod } from './solutions/sol.mod';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LpComponent  ],
  imports: [
    BrowserModule,
    SolMod,
    RouterModule.forRoot([
      {
        path: "",
        component: LpComponent
      },
      {
        path: 'invention',
        loadChildren: './inventions/inventions.module#InvModule'
      },
      {
        path: 'products',
        loadChildren: './products/pro.mod#ProductModule'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
