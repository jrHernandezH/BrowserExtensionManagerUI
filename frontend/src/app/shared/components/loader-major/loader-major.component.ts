import { Component } from '@angular/core';

@Component({
  selector: 'app-loader-major',
  imports: [],
  templateUrl: './loader-major.component.html',
  styleUrl: './loader-major.component.scss'
})
export class LoaderMajorComponent {

  // Inputs by Loader Component
  public loading: boolean = false;
  public loadingText: string = 'Loading...';


}
