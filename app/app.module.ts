import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { routes, navigatableComponents } from "./app.routing";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./pages/toolbar.component";
import { DataService } from "./data/datasource";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ...navigatableComponents
    ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule, 
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
      DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}
