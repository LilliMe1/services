import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { PlatformsComponent } from "./platforms/platforms.component";
import { ServerComponent } from "./server/server.component";
import { RouterModule } from "@angular/router";



@NgModule({
    declarations: [
        ProductsComponent,
        PlatformsComponent,
        ServerComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '',
            component: ProductsComponent,
            children: [
                {
                    path: 'platforms',
                    redirectTo: 'embeddedplatforms',
                    pathMatch: 'full'
                },
              {
                path: 'embeddedplatforms',
                component: PlatformsComponent
              },
              {
                path: 'serverprocessors',
                component: ServerComponent
              }
            ]
          }])
    ],
    providers: []
})
export class ProductModule{

}