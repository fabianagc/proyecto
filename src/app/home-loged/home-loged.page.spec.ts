import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLogedPage } from './home-loged.page';

describe('HomeLogedPage', () => {
  let component: HomeLogedPage;
  let fixture: ComponentFixture<HomeLogedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeLogedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
