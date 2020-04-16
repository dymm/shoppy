import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import { ItemsControllerService, Item } from 'src/typescript-angular-client';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Component, Type } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let itemsControllerServiceMock: any;

  beforeEach(async(() => {

    itemsControllerServiceMock = jasmine.createSpyObj('ItemControllerService', ['getAll', 'delete']);
    itemsControllerServiceMock.getAll.and.returnValue(of([]));
    itemsControllerServiceMock.delete.and.returnValue(of({}));

    TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: ItemsControllerService, useValue: itemsControllerServiceMock },
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
  }));

  describe('Creation', () => {
    it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
      expect(itemsControllerServiceMock.getAll).toHaveBeenCalledTimes(1);
    });

    it('Should load items on init', () => {
      itemsControllerServiceMock.getAll.and.returnValue(of([
        { id: 1, name: 'item1', price: 1.0 },
        { id: 2, name: 'item2', price: 2.0 }]));
      fixture.detectChanges();

      expect(itemsControllerServiceMock.getAll).toHaveBeenCalledTimes(1);
      expect(component.items.length).toBe(2);
    });
  });


  describe('Display', () => {
    beforeEach(async () => {
      itemsControllerServiceMock.getAll.and.returnValue(of([
        { id: 1, name: 'item1', price: 1.0 },
        { id: 2, name: 'item2', price: 2.0 }]));
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should display all items', () => {
      const items = fixture.debugElement
        .queryAll(By.css('h3'));
      expect(items.length).toBe(2);
    });

    it('should display the good informations', async () => {
      await fixture.whenStable();
      const itemNameElem = fixture.debugElement
        .query(By.css('h3 a'));
      const itemName: HTMLAnchorElement = itemNameElem.nativeElement;
      expect(itemName.textContent).toBe('item1');
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      itemsControllerServiceMock.getAll.and.returnValue(of([
        { id: 1, name: 'item1', price: 1.0 },
        { id: 2, name: 'item2', price: 2.0 }]));
      fixture.detectChanges();
    });
    it('should navigate to / before selection item', () => {
      const location = TestBed.inject(Location);
      expect(location.path()).toBe('');
    });
    it('should navigate to selected items', () => {
      const router = TestBed.inject(Router);
      spyOn(router, 'navigateByUrl');

      const itemNameElem = fixture.debugElement
        .query(By.css('h3 a'));
      const itemName: HTMLAnchorElement = itemNameElem.nativeElement;
      itemName.click();

      expect(router.navigateByUrl)
        .toHaveBeenCalledWith(router.createUrlTree(['/items/1']),
          { skipLocationChange: false, replaceUrl: false, state: undefined });
    });
  });

  describe('button test', () => {
    beforeEach(async () => {
      itemsControllerServiceMock.getAll.and.returnValue(of([
        { id: 1, name: 'item1', price: 1.0 },
        { id: 2, name: 'item2', price: 2.0 }]));
      fixture.detectChanges();
      await fixture.whenStable();
    });

    it('should delete an item when clicking on the delete button', () => {
      spyOn(component, 'deleteItem').and.callThrough();

      const buttonElem = fixture.debugElement.query(By.css('h3 button'));
      const button: HTMLButtonElement = buttonElem.nativeElement;
      button.click();

      expect(component.deleteItem).toHaveBeenCalledTimes(1);
      expect(component.deleteItem).toHaveBeenCalledWith(component.items[0]);
      expect(itemsControllerServiceMock.delete).toHaveBeenCalledWith('1');
      // expect(itemsControllerServiceMock.delete).toHaveBeenCalledTimes(1);
      // expect(component.items.length).toEqual(1);
    });

    it('Should call delete only once when spamming the delete button', () => {
      spyOn(component, 'deleteItem').and.callThrough();

      const buttonElem = fixture.debugElement.query(By.css('h3 button'));
      const button: HTMLButtonElement = buttonElem.nativeElement;
      button.click();
      fixture.detectChanges();
      button.click();
      button.click();
      button.click();
      expect(button.disabled).toBeTrue();
      expect(itemsControllerServiceMock.delete).toHaveBeenCalledTimes(1);
    });
  });

});
