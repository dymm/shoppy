import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreateComponent } from './item-create.component';
import { ItemsControllerService, Item } from 'src/typescript-angular-client';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('ItemCreateComponent', () => {
  let component: ItemCreateComponent;
  let fixture: ComponentFixture<ItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemCreateComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ItemsControllerService, useClass: FakeItemsControllerService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class FakeItemsControllerService {
  public create(item: Item, observe?: 'body', reportProgress?: boolean): Observable<any> {
    return of<Item>({});
  }
  public getById(id: string, observe?: 'body', reportProgress?: boolean): Observable<Item> {
    return of<Item>({});
  }
}
