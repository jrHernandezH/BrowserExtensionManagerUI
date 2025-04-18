import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'demo-app',
        pathMatch: 'full'
    },
    {
        path: 'demo-app',
        loadComponent: () => import('./pages/challengue/demo-app/demo-app.component').then(c => c.DemoAppComponent)
    }
];
