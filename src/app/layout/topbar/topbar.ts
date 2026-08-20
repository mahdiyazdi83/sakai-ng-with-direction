import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { LanguageService } from '@/app/services/language.service';
import { LayoutService } from '@/app/services/layout.service';
import { AppConfigurator } from '../configurator/configurator';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
    templateUrl: './topbar.html'
})
export class AppTopbar {
    items!: MenuItem[];

    layoutService = inject(LayoutService);
    languageService = inject(LanguageService);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

    toggleDirection() {
        this.languageService.toggleDirection();
    }
}
