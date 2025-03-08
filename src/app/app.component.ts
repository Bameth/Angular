import { Component } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

interface Link {
  name: string;
  path: string;
  class: string;
  sublinks?: Array<Link>;
  ariaCurrent?: string;
}

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string | null = null;

  private links: Link[] = [
    { name: 'Catalogue', path: '/catalogue', class: "text-gray-800 hover:text-black relative font-medium group", ariaCurrent: "page" },
    { name: 'Detail', path: 'catalogue/detail', class: "text-gray-800 hover:text-black relative font-medium group" },
  ];
}
