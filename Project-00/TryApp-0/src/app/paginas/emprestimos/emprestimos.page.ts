import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.page.html',
  styleUrls: ['./emprestimos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class EmprestimosPage implements OnInit {
  public vendas: any[] = [];
  public media_mensal: number = 0;
  public limite: number = 0;
  public juros: number = 1.03;
  public periodoSelecionado: string = '';


  constructor(private http: HttpClient) { }

  calculandoMediaMensal() {
    this.http.get('http://localhost:8000/vendas').subscribe((response: any) => {
      // Armazena os dados de vendas do usuário "Arthur"
      this.vendas = response.VendasArthur.slice(0, 12);
      this.media_mensal = (this.vendas.reduce((total: number, venda: any) => total + venda.valor, 0))/12;
    });
  }

  ngOnInit() {
    this.calculandoMediaMensal();
  }


  onPeriodoChange(event: any) {
    this.periodoSelecionado = event.detail.value;
    switch (this.periodoSelecionado) {
      case '1 mes':
        this.limite = this.media_mensal;
        break;
      case '2 meses':
        this.limite = this.media_mensal * 2;
        break;
      case '3 meses':
        this.limite = this.media_mensal * 3;
        break;
      case '4 meses':
        this.limite = this.media_mensal * 4;
        break;
      case '5 meses':
        this.limite = this.media_mensal * 5;
        break;
      case '6 meses':
        this.limite = this.media_mensal * 6;
        break;
      default:
        this.limite = 0;
        break;
    }

    }
  }


