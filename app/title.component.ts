import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-title',
    templateUrl: 'app/title.component.html'
})
export class TitleComponent {
    @Input() subtitle: String = '';
    title: String = 'This is title from title components';
    user = '';

    constructor(userService: UserService){
        this.user = userService.userName;
    }
}
