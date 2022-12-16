import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TrusteesComponent } from './trustees/trustees.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { MoreComponent } from './more/more.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule , MatButtonModule,MatIconModule } from '@angular/material';
import { EditformComponent } from './editform/editform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogConfig} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrusteesComponent,
    ProfessionalsComponent,
    MoreComponent,
    EditformComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditformComponent]
})
export class AppModule { }
