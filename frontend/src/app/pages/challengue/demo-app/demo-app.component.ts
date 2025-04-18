import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { CommonModule } from '@angular/common';
import { DUMMY_DATA } from '../../../shared/data/data.dummy';
import { ToastService } from '../../../shared/toast.service';

interface Filter {
  All: boolean;
  Active: boolean;
  Inactive: boolean;
}

interface DemoApp {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-demo-app',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './demo-app.component.html',
  styleUrl: './demo-app.component.scss'
})
export class DemoAppComponent {

  // Dummy Data
  public demoApps: WritableSignal<DemoApp[]> = signal<DemoApp[]>(DUMMY_DATA);
  // Service Injection
  private readonly toastService: ToastService = inject(ToastService);


  filterActive: Filter = {
    All: true,
    Active: false,
    Inactive: false
  };


  // Filter Functions 
  setActiveFilter(filter: string) {
    this.filterActive.All = false;
    this.filterActive.Active = false;
    this.filterActive.Inactive = false;

    switch (filter) {
      case 'All':
        this.filterActive.All = true;
        this.getAllDemoApps()
        break;
      case 'Active':
        this.filterActive.Active = true;
        this.getActiveDemoApps()
        break;
      case 'Inactive':
        this.filterActive.Inactive = true;
        this.getInactiveDemoApps()
        break;
      default:
        break;
    }
  }

  private getAllDemoApps(): void {
    this.demoApps.set(DUMMY_DATA);
  }
  private getActiveDemoApps(): void {
    this.demoApps.set(DUMMY_DATA.filter(app => app.isActive));
  }
  private getInactiveDemoApps(): void {
    this.demoApps.set(DUMMY_DATA.filter(app => !app.isActive));
  }

  removeDemoApp(): void {
    this.toastService.show('Demo App Removed Soon',);
  }

}
