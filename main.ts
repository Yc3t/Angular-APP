import { bootstrapApplication } from "@angular/platform-browser";
import {Component} from "@angular/core"
@Component({
    selector: 'app-root',
    standalone: true,
    template: `Hello!`,
})

export class firstComponent{}
bootstrapApplication(firstComponent)