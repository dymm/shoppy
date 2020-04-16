import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemsControllerService, Item } from 'src/typescript-angular-client';
import { Observable, of } from 'rxjs';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailComponent],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: ItemsControllerService, useClass: FakeItemsControllerService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class FakeItemsControllerService {
  public getById(id: string, observe?: 'body', reportProgress?: boolean): Observable<Item> {
    return of<Item>({});
  }
}
