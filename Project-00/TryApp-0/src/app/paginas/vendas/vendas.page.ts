import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VendasPage implements OnInit {

  saldo3Meses: number = 7560.50;
  saldo6Meses: number = 12450.00;
  saldo1Ano: number = 21902.30;
  conteudoExibido: string = '';

  constructor() { }

  ngOnInit() {
  }

  onPeriodoChange(event: any) {
    const periodoSelecionado = event.detail.value;
    switch (periodoSelecionado) {
      case '3 meses':
        this.conteudoExibido = `Saldo de vendas: R$${this.saldo3Meses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        break;
      case '6 meses':
        this.conteudoExibido = `Saldo de vendas: R$${this.saldo6Meses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        break;
      case '1 ano':
        this.conteudoExibido = `Saldo de vendas: R$${this.saldo1Ano.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        break;
      default:
        this.conteudoExibido = '';
        break;
    }
  }
}





