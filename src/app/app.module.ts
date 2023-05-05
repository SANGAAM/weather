import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import {MatListModule} from '@angular/material/list';


const routes: Routes = [
  {
      path:'view',
      component:ViewComponent
     
  },
  {
     path: 'form', 
  component: FormComponent
 }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatTabsModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
