import { Component, OnInit } from '@angular/core';
import { ItemsControllerService, Item } from 'src/typescript-angular-client';
import { map } from 'rxjs/operators';

interface DisplayedItem extends Item {
  deleted?: boolean;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Array<DisplayedItem>;
  constructor(private api: ItemsControllerService) { }

  ngOnInit(): void {
    this.api.getAll().pipe(
      map((it) => it as DisplayedItem[])
    )
      .subscribe(
        (items: any) => {
          this.items = items as Array<DisplayedItem>;
        },
        (err: any) => {
          window.alert('Error while getting item list.' + JSON.stringify(err));
        }
      );
  }

  deleteItem(item: DisplayedItem) {
    item.deleted = true;
    this.api.delete('' + item.id).subscribe(
      () => {
        this.items = this.items.filter(it => it !== item.id);
      },
      (err: any) => {
        window.alert('Error while deleting an item.' + JSON.stringify(err));
        item.deleted = false;
      }
    );
  }
}
