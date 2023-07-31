import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

login:boolean=true;
constructor(private cdRef:ChangeDetectorRef,private sharedService:SharedService,private authService: AuthService){
this.sharedService.changeLogin$.subscribe(() => {
  this.changelogin();
});
}

logout(){
  this.authService.logout();
  this.login=true;
  console.log("changed")
  this.cdRef.detectChanges();
  
}

changelogin(){
  this.login=false;
  console.log("changed")
  this.cdRef.detectChanges();
}

  isLoggedIn = false;
  private roles: string[] = [];
  showUserBoard = false;
  showAdminBoard = false;
  username?: string;
  currentUser: any;

  // constructor(
  //   private tokenStorageService: TokenStorageService,
  //   private drugsService: DrugsService,
  //   private cartService: CartService,
  //   private router: Router
  // ) { 
    
  // }

  // ngOnInit(): void {
  //   this.isLoggedIn = !!this.tokenStorageService.getToken();

  //   if(this.isLoggedIn) {
  //     const user = this.tokenStorageService.getUser();
  //     this.roles = user.roles;
  //     this.username = user.username;
  //     this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
  //     this.showUserBoard = this.roles.includes('ROLE_USER');
  //   }

  //   this.currentUser = this.tokenStorageService.getUser().username;
  //   console.log(this.currentUser);
  // }


  // logout(): void {
  //   this.tokenStorageService.signOut();
  //   window.location.reload();
  // }
}
