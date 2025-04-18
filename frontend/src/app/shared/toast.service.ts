import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly _message: WritableSignal<string> = signal<string>('');
  private readonly _isVisible: WritableSignal<boolean> = signal<boolean>(false);
  private timeoutId: any;

  public set message(value: string) {
    this._message.set(value);
  }

  public get message(): string {
    return this._message();
  }

  public get isVisible(): boolean {
    return this._isVisible();
  }

  public show(message: string, duration: number = 3000): void {
    // Cancelar el timeout anterior si existe
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.message = message;
    this._isVisible.set(true);

    this.timeoutId = setTimeout(() => {
      this._isVisible.set(false);
    }, duration);
  }

  public hide(): void {
    this._isVisible.set(false);
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}