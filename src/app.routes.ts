import { Routes } from '@angular/router';
import { AppLayout } from '@/app/layout/app-layout/app-layout';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: '',
                loadComponent: () => import('./app/pages/dashboard/dashboard').then((m) => m.Dashboard)
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
