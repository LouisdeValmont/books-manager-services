import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isConnected: boolean;
  tokenSub: Subscription;


  constructor(private authService : AuthService,
              private router: Router) { }

  ngOnInit(): void {

    this.tokenSub = this.authService.token.subscribe(
      (token:string)=>{
        if(token){
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }
      }
    )

  }

  onClickSignOut(){
    this.authService
      .signOut()
      .then(()=>{
        this.router.navigateByUrl('/auth')
      })
  }

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
  }

}
