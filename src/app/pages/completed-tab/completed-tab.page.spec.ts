import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedTabPage } from './completed-tab.page';

describe('CompletedTabPage', () => {
  let component: CompletedTabPage;
  let fixture: ComponentFixture<CompletedTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedTabPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
