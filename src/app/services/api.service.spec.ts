import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let https: HttpTestingController;
  let httpClient : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [ApiService],
    });
    service = TestBed.inject(ApiService);
    https = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  beforeEach(() => {
    https.verify();
    
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it("should return as aspected : getUserDetails", ()=>{
    let input = 'khulalit';

    service.getUser(input).subscribe(
      (data) => {
        expect(data).not.toBeNull();
      }
    );

    const req = https.expectOne('https://api.github.com/users/khulalit');

    expect(req.request.method).toEqual('GET');

  })

  it("when api fail", ()=>{
    let input = 'fhsdkljfjklsdjf';
    let output = {
      "message": "Not Found",
      "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
    };

    service.getUser(input).subscribe(
      (data) => {
        expect(data.message).toBe(output.message);
      }
    );

    const req = https.expectOne(`https://api.github.com/users/${input}`);

    expect(req.request.method).toEqual('GET');

  })

  it("should return as aspected : get Repos", ()=>{
    let username = 'khulalit';

    service.getUserRepos(username, 1, 10).subscribe(
      (data) => {
        expect(data).not.toBeNull();
        expect(data.length).toBeGreaterThan(1);
      }
    );

    const req = https.expectOne(`https://api.github.com/users/${username}/repos?per_page=${10}&&page=1`);

    expect(req.request.method).toEqual('GET');

  })
});
