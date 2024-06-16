import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRouingModule } from "./app.routes";
import { RouterModule } from "@angular/router";
  



@NgModule({
    declarations:[
        AppComponent,
    ],
imports: [
    BrowserModule,
    AppRouingModule,
    RouterModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}
