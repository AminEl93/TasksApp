import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingTabPage } from './pending-tab.page';

describe('PendingTabPage', () => {
    let component: PendingTabPage;
    let fixture: ComponentFixture<PendingTabPage>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PendingTabPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PendingTabPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
