import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  url:string = 'http://localhost:8000';
  constructor(private http:HttpClient ) {}

  listTeachers(){
    return this.http.get<any>(this.url+'/api/user/users')
  }
}
