import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { ThemeService } from '../../shared/theme.service';
import { ToastComponent } from "../../shared/components/toast/toast.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  private readonly themeService = inject(ThemeService);

  themeClass = computed(() => this.themeService.getThemeClass());

  constructor() {
    effect(() => {
      const body = document.body;
      body.classList.remove('dark-theme', 'light-theme');
      body.classList.add(this.themeClass());
      document.body.classList.toggle('theme-transition');
    });
  }
}
