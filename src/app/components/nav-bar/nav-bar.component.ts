import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, RegistroComponent,LoginComponent,RegistroComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
