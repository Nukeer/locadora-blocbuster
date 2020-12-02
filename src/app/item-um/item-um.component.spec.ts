import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUmComponent } from './item-um.component';

describe('ItemUmComponent', () => {
  let component: ItemUmComponent;
  let fixture: ComponentFixture<ItemUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
