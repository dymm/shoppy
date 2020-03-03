import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, ItemsControllerService } from 'src/typescript-angular-client';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ItemsControllerService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.api.getById(params.get('itemId')).subscribe(
        (item: Item) => {
          this.item = item;
        },
        (err: any) => {
          console.log('Error in getById ' + err);
          this.router.navigate(['/']);
        }
      );
    });
  }

}
