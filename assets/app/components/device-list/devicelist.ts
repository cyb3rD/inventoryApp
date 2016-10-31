import { Component, OnInit } from '@angular/core';
import { Device } from '../../classes/device';
import { DeviceService } from '../../services/device.service';

// TODO:
// Render device-item with data from the DeviceService

@Component({
    // moduleId: module.id,
    selector: 'device-list',
    template: `
    <p>DeviceList component</p>
    {{ deviceList[0].invNum }}
    <device-item></device-item>
    `
})
export class DeviceListComponent implements OnInit {
    deviceList: Array<Device>;
    // Injecting service into component
    constructor(private _deviceService: DeviceService) {
        this.deviceList = this._deviceService.getDevices();
     }

    ngOnInit() { }
}