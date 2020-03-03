import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Item, ItemsControllerService } from 'src/typescript-angular-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  itemForm: FormGroup;

  constructor(private api: ItemsControllerService, private router: Router) {
    this.itemForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onCreate() {
    this.api.create( {name: this.itemForm.controls["name"].value, price:this.itemForm.controls["price"].value} as Item).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
