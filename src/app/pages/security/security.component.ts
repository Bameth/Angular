import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-security',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {

}
