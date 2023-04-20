import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecebiveisPage } from './recebiveis.page';

describe('RecebiveisPage', () => {
  let component: RecebiveisPage;
  let fixture: ComponentFixture<RecebiveisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecebiveisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
