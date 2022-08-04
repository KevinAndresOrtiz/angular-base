import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contar/contador.component";

@NgModule({
   declarations: [
      ContadorComponent,
   ],
   exports : [
      ContadorComponent,
   ],
})
export class ContadorModule {

}
