import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VendasPage implements OnInit {
  public venda3: any[] = [];
  public venda6: any[] = [];
  public venda12: any[] = [];

  saldo3Meses: number = 7560.50;
  quantidadeVendas3Meses: number = 15; // Nova variável para quantidade de vendas em 3 meses
  saldo6Meses: number = 12450.00;
  quantidadeVendas6Meses: number = 28; // Nova variável para quantidade de vendas em 6 meses
  saldo1Ano: number = 21902.30;
  quantidadeVendas1Ano: number = 41; // Nova variável para quantidade de vendas em 1 ano
  faturamento: string = '';
  quantidade_vendas: string = '';

  constructor(private http: HttpClient) {} 


  obterVendadoServidor3() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        const vendas = response.Venda.slice(0, 3); // Obtém os primeiros 4 itens do array 'Venda'
        const soma = vendas.reduce((total:number, venda:any) => total + venda.valor, 0); // Calcula a soma das vendas
        this.venda3 = soma;
      });
  }
  obterVendadoServidor6() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        const vendas = response.Venda.slice(0, 6); // Obtém os primeiros 4 itens do array 'Venda'
        const soma = vendas.reduce((total:number, venda:any) => total + venda.valor, 0); // Calcula a soma das vendas
        this.venda6 = soma;
      });
  }
  obterVendadoServidor12() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        const vendas = response.Venda.slice(0, 12); // Obtém os primeiros 4 itens do array 'Venda'
        const soma = vendas.reduce((total:number, venda:any) => total + venda.valor, 0); // Calcula a soma das vendas
        this.venda12 = soma;
      });
  }



 

  ngOnInit() {
    this.obterVendadoServidor3();
    this.obterVendadoServidor6();
    this.obterVendadoServidor12()
    
  }

  onPeriodoChange(event: any) {
    const periodoSelecionado = event.detail.value;
    switch (periodoSelecionado) {
      case '3 meses':
        this.faturamento = `R$${this.venda3}`;
        this.quantidade_vendas = `${this.quantidadeVendas3Meses}`;
        break;
      case '6 meses':
        this.faturamento = `R$${this.venda6}`;
        this.quantidade_vendas = `${this.quantidadeVendas6Meses}`;
        break;
      case '1 ano':
        this.faturamento = `R$${this.venda12}`;
        this.quantidade_vendas = `${this.quantidadeVendas1Ano}`;
        break;
      default:
        this.faturamento = '';
        this.quantidade_vendas = '';
        break;
    }
  }
}
