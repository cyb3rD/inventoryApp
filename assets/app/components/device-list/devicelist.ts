import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'device-list',
    template: `
    <p>DeviceList component</p>
    <device-item></device-item>
    `
})
export class DeviceListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}