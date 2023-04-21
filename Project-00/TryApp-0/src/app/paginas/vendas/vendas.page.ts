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
  public qtd3: any[] = [];
  public venda6: any[] = [];
  public qtd6: any[] = [];
  public venda12: any[] = [];
  public qtd12: any[] = [];

  faturamento: string = '';
  quantidade_vendas: string = '';

  constructor(private http: HttpClient) {}


  obterVendadoServidor3() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        const vendas = response.Venda.slice(0, 3); // Obtém os primeiros 4 itens do array 'Venda'
        const soma = vendas.reduce((total:number, venda:any) => total + venda.valor, 0);
        const somaqtd = vendas.reduce((total:number, venda:any)=>total +venda.venda,0)
        this.qtd3 = somaqtd  // Calcula a soma das vendas
        this.venda3 = soma;
        this.quantidade3 = vendas.length;
      });
  }
  obterVendadoServidor6() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        const vendas = response.Venda.slice(0, 6); // Obtém os primeiros 4 itens do array 'Venda'
        const soma = vendas.reduce((total:number, venda:any) => total + venda.valor, 0);
        const somaqtd = vendas.reduce((total:number, venda:any)=>total +venda.venda,0)
        this.qtd6 = somaqtd  // Calcula a soma das vendas
        this.venda6 = soma;
        this.quantidade6 = vendas.length;
      });
  }
  obterVendadoServidor12() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        const vendas = response.Venda.slice(0, 12); // Obtém os primeiros 4 itens do array 'Venda'
        const soma = vendas.reduce((total:number, venda:any) => total + venda.valor, 0);
        const somaqtd = vendas.reduce((total:number, venda:any)=>total +venda.venda,0)
        this.qtd12 = somaqtd // Calcula a soma das vendas
        this.venda12 = soma;
        this.quantidade12 = vendas.length;
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
        this.quantidade_vendas = `${this.qtd3}`;
        break;
      case '6 meses':
        this.faturamento = `R$${this.venda6}`;
        this.quantidade_vendas = `${this.qtd6}`;
        break;
      case '1 ano':
        this.faturamento = `R$${this.venda12}`;
        this.quantidade_vendas = `${this.qtd12}`;
        break;
      default:
        this.faturamento = '';
        this.quantidade_vendas = '';
        break;
    }
  }
}
