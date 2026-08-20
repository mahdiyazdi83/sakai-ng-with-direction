import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';

type TranslationKey =
    | 'brand.name'
    | 'topbar.direction';

const TRANSLATIONS: Record<TranslationKey, string> = {
    'brand.name': 'Sakai RTL Admin',
    'topbar.direction': 'Toggle page direction'
};

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private document = inject(DOCUMENT);

    currentLanguage = signal<'fa' | 'en'>('fa');
    direction = signal<'rtl' | 'ltr'>('rtl');
    directionLabel = computed(() => this.direction().toUpperCase());
    directionIcon = computed(() => (this.direction() === 'rtl' ? 'pi pi-align-right' : 'pi pi-align-left'));
    directionTitle = computed(() => {
        const current = this.directionLabel();
        const next = this.direction() === 'rtl' ? 'LTR' : 'RTL';
        return `Current direction: ${current}. Switch to ${next}`;
    });

    constructor() {
        effect(() => {
            const root = this.document.documentElement;

            root.lang = this.currentLanguage();
            root.dir = this.direction();
            root.classList.toggle('app-rtl', this.direction() === 'rtl');
            root.classList.toggle('app-ltr', this.direction() === 'ltr');
            this.document.body.dir = this.direction();
        });
    }

    t(key: TranslationKey): string {
        return TRANSLATIONS[key];
    }

    toggleDirection(): void {
        const nextDirection = this.direction() === 'rtl' ? 'ltr' : 'rtl';
        this.direction.set(nextDirection);
        this.currentLanguage.set(nextDirection === 'rtl' ? 'fa' : 'en');
    }
}
