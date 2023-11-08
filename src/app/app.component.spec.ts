// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { UserInfoComponent } from './user-info/user-info.component'; // Update the path
// import { RepositryCardComponent } from './repositry-card/repositry-card.component'; // Update the path
// import { PaginationComponent } from './pagination/pagination.component'; // Update the path
// import { SkteltonLoadingComponent } from './sktelton-loading/sktelton-loading.component'; // Update the path
// import { AppComponent } from './app.component'; // Update the path
// import { FormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';


// describe('AppComponent', () => {
//   let component: AppComponent;
//   let fixture: ComponentFixture<AppComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         AppComponent,
//         UserInfoComponent,
//         RepositryCardComponent,
//         PaginationComponent,
//         SkteltonLoadingComponent,
//       ],
//       imports: [RouterTestingModule, FormsModule, HttpClient],
//     }).compileComponents();
//     fixture = TestBed.createComponent(AppComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // beforeEach(() => {
    
//   // });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should display loading indicator when loading is true', () => {
//   //   component.loading = true;
//   //   fixture.detectChanges();

//   //   const loadingIndicator = fixture.debugElement.query(By.css('app-skeleton-loading'));

//   //   expect(loadingIndicator).toBeTruthy();
//   // });

//   it('should display user info, repositories, and pagination when loading is false', () => {
//     component.loading = false;
//     component.username = 'khulalit';
//     component.repos = [{ name: 'Repo1', description: 'Description1' }, /*...*/];
//     component.totalPages = 4;
//     component.page = 1;
//     fixture.detectChanges();

//     const userInfo = fixture.debugElement.query(By.directive(UserInfoComponent));
//     const repositories = fixture.debugElement.queryAll(By.directive(RepositryCardComponent));
//     const pagination = fixture.debugElement.query(By.directive(PaginationComponent));

//     expect(userInfo).toBeTruthy();
//     expect(repositories.length).toBeGreaterThan(0);
//     expect(pagination).toBeTruthy();
//   });
// });

