import { Component, Input, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchForProduct: string = '';
  selectedCatId: number = 0;
  categorys: Icategory[];
  constructor() {
    this.categorys = [
      { id: 1, name: 'موبايلات' },
      { id: 2, name: 'ملابس' },
    ];
  }

  ngOnInit(): void {}
}
