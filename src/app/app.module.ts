import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ButtonComponent } from './components/button/button.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { SerialService } from './services/serial.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
    ButtonComponent,
    ColorPickerComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SerialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
