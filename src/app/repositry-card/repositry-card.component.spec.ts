import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositryCardComponent } from './repositry-card.component';

describe('RepositryCard Component', () => {
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

  it('should display repo card heading, description, and span', () => {
    const compiled = fixture.nativeElement;
    compiled.querySelector('h2').textContent = 'Repo Name';
    compiled.querySelector('p').textContent = 'Discription of the repo.';

    expect(compiled.querySelector('h2').textContent).toContain('Repo Name');

    expect(compiled.querySelector('p').textContent).toContain('Discription of the repo.');
  });
});
