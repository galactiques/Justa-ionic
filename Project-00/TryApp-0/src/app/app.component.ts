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
    { title: 'Pagina Inicial', url: '/folder/page', icon: 'mail' },
      


      ///aqui se guarda os objetos do menu



  ];
  public labels = ['Rendimentos', 'Informações'];
  /// aqui as labels. ainda não sei como associar uma coisa a elas
  constructor() {}
}
