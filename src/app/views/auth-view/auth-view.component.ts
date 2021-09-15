import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errMsg:string;

  email:string;
  password:string;

  constructor(private authService: AuthService,
              private  router:Router) { }

  ngOnInit(): void {
  }

  onSumbitAuthForm() {
    this.authService
      .signIn(this.email, this.password)
      .then(() => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        //recuperation msg d'erreur avec le form
        this.errMsg = errMsg;
      })
  }
}
