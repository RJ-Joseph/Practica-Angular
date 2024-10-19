import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/auth';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NgIf,AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user$!: Observable<firebase.User | null>;
isLoading:boolean = false;
errorMenssage:string='';

  constructor(private _srvAuth:AuthService) {}

  ngOnInit(): void {
    this.user$ = this._srvAuth.getUser();
  }

  async onGoogleLogin(): Promise<void> {
    this.isLoading = true;
    try{
      await this._srvAuth.loginWithGoogle();
      console.log('Login con Exito');

    }catch(error){
      this.errorMenssage = 'Error de Login';
      console.error(error);

    }finally{
      this.isLoading = false;
    }
  }

  async logout(): Promise<void> {
this.isLoading =true;
try{
  await this._srvAuth.logout();
  console.log('Logout con Exito');

}catch(error){
  this.errorMenssage = 'Error de Logout';
  console.error(error);

}finally{
  this.isLoading = false;
}
    
  }

}
