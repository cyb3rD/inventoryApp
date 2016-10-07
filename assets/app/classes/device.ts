// Represents device class according to the model

export class Device {
    deviceId: string;

    companyId: string;
    departmentId: string;
    roomId: string;
    userId: string;
    devmodelId: string;
    supplyId: string[];

    descriptionUrl: string;
    scanFolder: string;
    url: string;
    serialNumber: string;
    invNum: string;

    constructor (invNum: string, url: string, serialNumber?: string) {

    }
}