import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  user:any;

  ngOnInit(): void {
  }


  login(email:string,password:string){
      this.user = {
        'email':email,
        'password':password
      }
      this.loginService.loginUser({user:this.user as object}).subscribe((res)=>{
           if(res.user_group_name == 'Admin'){
            this.router.navigate(['/teacher-data'])
           }else{
            this.router.navigate(['/teacher-panel'])
           }
      },
      
  //     )
  // }

}
