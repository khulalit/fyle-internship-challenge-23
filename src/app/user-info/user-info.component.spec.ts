// // user-info.component.spec.ts

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { UserInfoComponent } from './user-info.component';
// import { UserInfoMockService } from './user-info.mock.services';

// describe('UserInfoComponent', () => {
//   let component: UserInfoComponent;
//   let fixture: ComponentFixture<UserInfoComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [UserInfoComponent],
//       imports: [HttpClientTestingModule],
//       providers: [{ provide: UserInfoMockService, useClass: UserInfoMockService }]
//     });

//     fixture = TestBed.createComponent(UserInfoComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should fetch user details from the mock service', () => {
//     const userInfoService = TestBed.inject(UserInfoMockService);
//     const getUserDetailsSpy = spyOn(userInfoService, 'getUserDetails').and.callThrough();

//     fixture.detectChanges();

//     expect(getUserDetailsSpy).toHaveBeenCalled();
//     expect(component.user).toEqual({
//       name: 'John Doe',
//       bio: 'Web Developer',
//       location: 'City, Country',
//       twitterHandle: '@johndoe'
//     });
//   });
// });
