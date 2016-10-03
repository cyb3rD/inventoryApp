import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { IMPORTS } from './modules/modules';
import { COMPONENTS } from './modules/components';
import { PROVIDERS } from './modules/providers';


@NgModule({
    // 
    imports: [ BrowserModule, IMPORTS],
    // 
    declarations: [ AppComponent, COMPONENTS],
    // 
    providers: PROVIDERS,
    // 
    bootstrap: [AppComponent]

})
export class AppModule {}