import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-recebiveis',
  templateUrl: './recebiveis.page.html',
  styleUrls: ['./recebiveis.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecebiveisPage implements OnInit {
  saldo_em_conta: number = 32345.30;

  constructor() { }

  ngOnInit() {
  }
}
