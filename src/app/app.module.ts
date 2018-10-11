import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LpComponent } from './lp/lp.component';
import { FivegComponent } from './inventions/fiveg/fiveg.component';
import { AiComponent } from './inventions/ai/ai.component';
import { ExtendedRealityComponent } from './inventions/extended-reality/extended-reality.component';
import { UniversityrelationsComponent } from './inventions/universityrelations/universityrelations.component';
import { PlatformsComponent } from './products/platforms/platforms.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ServerComponent } from './products/server/server.component';
import { AutomitiveComponent } from './solutions/automitive/automitive.component';
import { HcComponent } from './solutions/hc/hc.component';
import { IotComponent } from './solutions/iot/iot.component';
import { McComponent } from './solutions/mc/mc.component';
import { InventionsComponent } from './inventions/inventions.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ProductsComponent } from './products/products.component';
import { Server } from 'selenium-webdriver/safari';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LpComponent,
    FivegComponent,
    AiComponent,
    ExtendedRealityComponent,
    UniversityrelationsComponent,
    PlatformsComponent,
    MobileComponent,
    ServerComponent,
    AutomitiveComponent,
    HcComponent,
    IotComponent,
    McComponent,
    InventionsComponent,
    SolutionsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        component: LpComponent
      },
      {
        path: 'invention',
        component: InventionsComponent,
        children: [
          {
            path: '5G',
            component: FivegComponent
          },
          {
            path: 'extrel',
            component: ExtendedRealityComponent
          },
          {
            path: 'ai',
            component: AiComponent
          }
        ]
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
        children: [
          {
            path:'automotive',
            component: AutomitiveComponent
          },
          {
            path:'hc',
            component: HcComponent
          },
          {
            path: 'iot',
            component: IotComponent
          },
          {
            path: 'mc',
            component: MobileComponent
          }
        ]
      },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          {
            path: 'embeddedplatforms',
            component: PlatformsComponent
          },
          {
            path: 'serverprocessors',
            component: ServerComponent
          },
          {
            path:'mobileprocessors',
            component: MobileComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
