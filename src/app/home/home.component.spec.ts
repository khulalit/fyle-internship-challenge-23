import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have input fields for username and repoPerPage', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[id="username"]'));
    const repoPerPageInput = fixture.debugElement.query(By.css('input[id="repoPerPage"]'));

    expect(usernameInput).toBeTruthy();
    expect(repoPerPageInput).toBeTruthy();
  });

  
  it('should bind to ngModel for username and repoPerPage', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[id="username"]')).nativeElement;
    const repoPerPageInput = fixture.debugElement.query(By.css('input[id="repoPerPage"]')).nativeElement;

    usernameInput.value = 'testUsername';
    usernameInput.dispatchEvent(new Event('input'));

    repoPerPageInput.value = '5';
    repoPerPageInput.dispatchEvent(new Event('input'));

    expect(component.username).toBe('testUsername');
    expect(component.repoPerPage).toBe(5);
  });

  it('should call submit() method when the submit button is clicked', () => {
    const searchSpy = spyOn(component, 'submit');

    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    submitButton.click();

    expect(searchSpy).toHaveBeenCalled();
  });

});