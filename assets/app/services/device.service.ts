import { Device } from '../classes/device';

export class DeviceService {
    devices: Array<Device> = [];

     getDevices() {
         this.devices.push({'invNum': 'InvNum',
                            'url': 'HTTP://some.url'});
        return this.devices;
    }
    
    addDevice(device: Device) {
        this.devices.push(device);
    }

    deleteDevice(device: Device) {
        this.devices.splice(this.devices.indexOf(device), 1);
    }
}