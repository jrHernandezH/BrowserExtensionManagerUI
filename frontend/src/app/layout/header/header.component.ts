import { Component, HostListener, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public icon_theme: WritableSignal<string> = signal<string>('assets/images/icon-moon.svg');
  public logo_app: WritableSignal<string> = signal<string>('assets/images/logo.svg');

  // Service 
  public themService = inject(ThemeService)

  // OnInit
  ngOnInit(): void {
    this.icon_theme.set(this.themService.isDarkTheme() ? 'assets/images/icon-sun.svg' : 'assets/images/icon-moon.svg');
    this.logo_app.set(this.themService.isDarkTheme() ? 'assets/images/logo-dark.svg' : 'assets/images/logo.svg');
  }

  @HostListener('document:keydown.control.c', ['$event'])
  handleThemeShortcut(event: KeyboardEvent) {
    event.preventDefault();
    this.toggleTheme();
  }

  // Functions
  public toggleTheme(): void {
    this.themService.toggleTheme();
    this.icon_theme.set(this.themService.isDarkTheme() ? 'assets/images/icon-sun.svg' : 'assets/images/icon-moon.svg');
    this.logo_app.set(this.themService.isDarkTheme() ? 'assets/images/logo-dark.svg' : 'assets/images/logo.svg');
  }


}
