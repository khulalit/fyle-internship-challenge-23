import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositryCardComponent } from './repositry-card.component';

describe('RepositryCardComponent', () => {
  let component: RepositryCardComponent;
  let fixture: ComponentFixture<RepositryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositryCardComponent],
    });

    fixture = TestBed.createComponent(RepositryCardComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display card heading, description, and span', () => {
    const compiled = fixture.nativeElement;

    // Check if the heading is displayed
    expect(compiled.querySelector('h2').textContent).toContain('Card Heading');

    // Check if the description is displayed
    expect(compiled.querySelector('p').textContent).toContain('This is a sample description for the card.');

    // Check if the button is displayed
    const button = compiled.querySelector('span');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('javascript');
  });
});
