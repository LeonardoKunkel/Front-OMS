import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { NavController} from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  enter: boolean;

  loginUser = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
              private navCtrl: NavController,
              private uiService: UiService) { }

  ngOnInit() {
    localStorage.clear();
    console.log(this.enter);

    if(this.enter == true) {
      this.enter = false;
      location.reload();
    }
  }

  async login(fLogin: NgForm) {
    if(fLogin.invalid){return;}
    const valido = await this.authService.login(this.loginUser.email, this.loginUser.password);

    if(valido){
      //navegar a tabs
      this.enter = true;
      console.log(this.enter);
      this.navCtrl.navigateForward('main/tabs/tab1', {animated: true});
    } else {
      this.uiService.alertaInformativa('Usuario o contraseña invalidos');
    }
  }

   entrar(){
    this.navCtrl.navigateForward('main/tabs/tab1');
  }

}
