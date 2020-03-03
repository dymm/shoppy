import { Component, OnInit } from '@angular/core';
import { ItemsControllerService, Item } from 'src/typescript-angular-client';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Array<Item>;
  constructor(private api: ItemsControllerService ) { }

  ngOnInit(): void {
    this.api.getAll().subscribe(
      (items: Array<Item>) => {
        this.items = items;
      },
      (err: any) => {
        console.log('Error while geting all items.' + JSON.stringify(err));
      }
    );
  }

}
