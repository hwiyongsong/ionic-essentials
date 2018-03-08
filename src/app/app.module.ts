import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";


let components: Array<any> = [
  MyApp,
  HomePage
]

let providers: Array<any> = [
  SplashScreen,
  StatusBar,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
]

let directives: Array<any> = [

]

let pipes: Array<any> = [

]

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: providers,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
