import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorys: Icategory[];
  catId: number = 0;
  numberOfCat: number = 0;
  @Output() cartIdChanged: EventEmitter<number> = new EventEmitter<number>();
  onsearchTextChanged() {
    this.cartIdChanged.emit(this.catId);
  }

  constructor() {
    this.categorys = [
      { id: 1, name: 'ملابس' },
      { id: 2, name: 'موبايلات' },
    ];
  }

  ngOnInit(): void {}
}
