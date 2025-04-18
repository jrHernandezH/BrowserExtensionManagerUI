import { Component, OnInit } from '@angular/core';
import { BodyComponent } from './layout/body/body.component';
import { LoaderMajorComponent } from './shared/components/loader-major/loader-major.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [BodyComponent, LoaderMajorComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public loader: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
}
