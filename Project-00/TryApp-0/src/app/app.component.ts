import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Vendas', url: '/vendas', icon: 'receipt' },
    { title: 'Empréstimos', url: '/folder/emprestimos', icon: 'cash' },
    { title: 'Recebíveis', url: '/folder/recebiveis', icon: 'wallet' },
    { title: 'Conta', url: '/folder/conta', icon: 'person' },
  ];
  public labels = ['Rendimentos', 'Informações'];
  /// aqui as labels. ainda não sei como associar uma coisa a elas
  constructor() {}
}
