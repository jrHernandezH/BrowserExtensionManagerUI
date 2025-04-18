import { Injectable, signal, WritableSignal } from '@angular/core';

type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly theme: WritableSignal<ThemeMode> = signal<ThemeMode>('light');

  constructor() {
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;

    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme.set(savedTheme);
    }
  }

  getTheme(): ThemeMode {
    return this.theme();
  }

  setTheme(newTheme: ThemeMode): void {
    this.theme.set(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  toggleTheme(): void {
    const newTheme: ThemeMode = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  isDarkTheme(): boolean {
    return this.theme() === 'dark';
  }

  isLightTheme(): boolean {
    return this.theme() === 'light';
  }

  getThemeSignal(): WritableSignal<ThemeMode> {
    return this.theme;
  }

  getThemeClass(): string {
    return this.isDarkTheme() ? 'dark-theme' : 'light-theme';
  }
}
