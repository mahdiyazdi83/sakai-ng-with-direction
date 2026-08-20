import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from '../configurator/configurator';
import { LayoutService } from '@/app/services/layout.service';

@Component({
    selector: 'app-floating-configurator',
    standalone: true,
    imports: [CommonModule, ButtonModule, StyleClassModule, AppConfigurator],
    templateUrl: './floating-configurator.html'
})
export class AppFloatingConfigurator {
    layoutService = inject(LayoutService);

    float = input<boolean>(true);

    isDarkTheme = computed(() => this.layoutService.layoutConfig().darkTheme);

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
