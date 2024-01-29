import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AddListPage } from './add-list.page';

describe('AddListPage', () => {
    let component: AddListPage;
    let fixture: ComponentFixture<AddListPage>;

    beforeEach(waitForAsync(() => {
        fixture = TestBed.createComponent(AddListPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});