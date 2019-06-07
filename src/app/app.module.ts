import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { StockBoardComponent } from './stock-board/stock-board.component';
import { StockBoardLoaderComponent } from './stock-board-loader/stock-board-loader.component';
import { FormsModule } from '@angular/forms';
import { ListStockBoardsComponent } from './list-stock-boards/list-stock-boards.component'; // <-- NgModel lives here
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeLogadaComponent } from './home-logada/home-logada.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { CadastroConcluidoComponent } from './cadastro-concluido/cadastro-concluido.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StockBoardComponent,
    StockBoardLoaderComponent,
    ListStockBoardsComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CadastroClientesComponent,
    HomeLogadaComponent,
    AcessoNegadoComponent,
    CadastroConcluidoComponent,
    LoginComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
