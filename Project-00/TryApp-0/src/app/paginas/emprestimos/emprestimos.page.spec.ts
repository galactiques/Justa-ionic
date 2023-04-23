import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmprestimosPage } from './emprestimos.page';

describe('EmprestimosPage', () => {
  let component: EmprestimosPage;
  let fixture: ComponentFixture<EmprestimosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmprestimosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
