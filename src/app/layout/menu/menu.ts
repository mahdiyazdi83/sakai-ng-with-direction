import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from '../menu-item/menu-item';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    templateUrl: './menu.html'
})
export class AppMenu {
    model: MenuItem[] = [
        {
            label: 'Starter',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
            ]
        }
    ];
}
