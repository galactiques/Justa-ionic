import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.page.html',
  styleUrls: ['./recebiveis.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecebiveisPage implements OnInit {
  //saldo_em_conta: number = 32345.30;
  //adiantamento: number = 130;

  public adiantar: any[] = [];
  public saldo: any[] = [];
  

  constructor(private http: HttpClient) {}


  obterVendadoServidor() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        this.adiantar= response.Venda[12].valor
      });
  }

  saldoEmConta(){
    this.http.get('http://localhost:8000/saldo')
    .subscribe((response:any)=>{
      this.saldo = response.Saldo[0].saldo
    })
  }
  ngOnInit() {
    this.obterVendadoServidor(),
    this.saldoEmConta()
    }
  
}
