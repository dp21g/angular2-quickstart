import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<app-title [subtitle]="subtitle"></app-title>'
})
export class AppComponent {
    subtitle: String = '(v1)';
}