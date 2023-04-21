import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendasPage } from './vendas.page';

describe('VendasPage', () => {
  let component: VendasPage;
  let fixture: ComponentFixture<VendasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

