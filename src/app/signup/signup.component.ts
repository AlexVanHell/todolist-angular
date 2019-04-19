import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  passwordPreviews = {
    first: true,
    confirm: true
  }

  /* firstStatus: boolean = true;
  firstStatus2: boolean = true; */
  passText: string = 'Contraseña';

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  /* fn() {
    this.firstStatus ? 'cumple' : 'no cumple';

    if (this.firstStatus) {
      'cumple'
    } else {
      'no cumple'
    }
  } */

  getIcon(value: boolean): string {
    if (value) {
      return 'eye';
    } else {
      return 'eye-slash';
    }
  }

  signup(event: Event): void {
    event.preventDefault();

    this.alertService.show({
      title: 'Super alerta!',
      body: '¿Estás seguro de hackear la NASA?'
    })
  }

}
