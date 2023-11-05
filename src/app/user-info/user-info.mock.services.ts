// user-info.mock.service.ts

import { Observable, of } from 'rxjs';
import { UserInfoComponent } from './user-info.component';

export class UserInfoMockService {
  getUserDetails(): Observable<UserInfoComponent> {
    // Mock user details
    const mockUser: UserInfoComponent = {
      name: 'John Doe',
      bio: 'Web Developer',
      location: 'City, Country',
      twitterHandle: '@johndoe'
    };

    return of(mockUser);
  }
}
