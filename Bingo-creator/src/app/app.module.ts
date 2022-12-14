import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { LoginFormComponent } from './Components/login-form/login-form.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { AccountComponent } from './Components/account/account.component';
import { BingoComponent } from './Components/bingo/bingo.component';
import { AddWordsComponent } from './Components/add-words/add-words.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from'@angular/material/icon';
import { MatTableModule } from'@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CdkTableModule } from '@angular/cdk/table';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionDialogComponent } from './Components/question-dialog/question-dialog.component';
import { LoginDialogComponent } from './Components/login-dialog/login-dialog.component';
import { BingoSummaryComponent } from './Components/bingo-summary/bingo-summary.component'
import { AuthInterceptor } from './Services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ToolbarComponent,
    AccountComponent,
    BingoComponent,
    AddWordsComponent,
    QuestionDialogComponent,
    LoginDialogComponent,
    BingoSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatGridListModule,
    CdkTableModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
