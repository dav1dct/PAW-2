import { Routes } from '@angular/routes';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BukuComponent } from './buku/buku.component';

export const routes: Routes = [
    {
        path:'admin',
        component: AdminComponent,
        children :[
            {
                path : '',
                component : DashboardComponent
            }
            {
                path : 'buku',
                component : BukuComponent
            }
        ]
    }
];
