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
  quantidadeVendas3Meses: number = 15; // Nova variável para quantidade de vendas em 3 meses
  saldo6Meses: number = 12450.00;
  quantidadeVendas6Meses: number = 28; // Nova variável para quantidade de vendas em 6 meses
  saldo1Ano: number = 21902.30;
  quantidadeVendas1Ano: number = 41; // Nova variável para quantidade de vendas em 1 ano
  faturamento: string = '';
  quantidade_vendas: string = '';

  constructor() { }

  ngOnInit() {
  }

  onPeriodoChange(event: any) {
    const periodoSelecionado = event.detail.value;
    switch (periodoSelecionado) {
      case '3 meses':
        this.faturamento = `R$${this.saldo3Meses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        this.quantidade_vendas = `${this.quantidadeVendas3Meses}`;
        break;
      case '6 meses':
        this.faturamento = `R$${this.saldo6Meses.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        this.quantidade_vendas = `${this.quantidadeVendas6Meses}`;
        break;
      case '1 ano':
        this.faturamento = `R$${this.saldo1Ano.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        this.quantidade_vendas = `${this.quantidadeVendas1Ano}`;
        break;
      default:
        this.faturamento = '';
        this.quantidade_vendas = '';
        break;
    }
  }
}
