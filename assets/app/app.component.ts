import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Inventory App</a>
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="/departments">Testing REST</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> SignUp</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </nav>
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