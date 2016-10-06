import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1">
                    <sidebar></sidebar>
                </div>

                 <div class="col-md-11">
                    <dashboard></dashboard>
                </div>

            </div>
        </div>
    `,
    styles: [`
    body { padding: 0;}
    `]

})
export class AppComponent {
    
    constructor() {

    }
}