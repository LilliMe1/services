import { NgModule } from "@angular/core";
import { HcComponent } from "./hc/hc.component";
import { SolutionsComponent } from "./solutions.component";
import { IotComponent } from "./iot/iot.component";
import { McComponent } from "./mc/mc.component";
import { RouterModule } from "@angular/router";
import { AutomitiveComponent } from "./automitive/automitive.component";
import { CommonModule } from "@angular/common";
import { MobileComponent } from "../products/mobile/mobile.component";
import { DataService } from "../data.service";
import { RpieComponent } from "../rpie/rpie.component";


@NgModule({
    declarations: [HcComponent, 
      RpieComponent,
      SolutionsComponent, MobileComponent, AutomitiveComponent, IotComponent, McComponent],
    imports: [
        
        CommonModule,
        RouterModule.forRoot([
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
          }
    ])],
    providers: [DataService]
})
export class SolMod{

}