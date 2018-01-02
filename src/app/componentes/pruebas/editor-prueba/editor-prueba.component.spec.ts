import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPruebaComponent } from './editor-prueba.component';

describe('EditorPruebaComponent', () => {
  let component: EditorPruebaComponent;
  let fixture: ComponentFixture<EditorPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
