import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.page.html',
  styleUrls: ['./recebiveis.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class RecebiveisPage implements OnInit {
  //saldo_em_conta: number = 32345.30;
  //adiantamento: number = 130;

  public adiantar: number = 0;
  public saldo: number = 0;


  constructor(private http: HttpClient) {}


  obterVendadoServidor() {
    this.http.get('http://localhost:8000/vendas')
      .subscribe((response: any) => {
        //O quanto o usuário "Arthur" pode adiantar
        this.adiantar= response.VendasLuan[12].valor
      });
  }

  saldoEmConta(){
    this.http.get('http://localhost:8000/users')
    .subscribe((response:any)=>{
      this.saldo = response.Users[0].saldo
    })
  }
  ngOnInit() {
    this.obterVendadoServidor(),
    this.saldoEmConta();
    }

}
