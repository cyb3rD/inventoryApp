// Represents device class according to the model

// TODO:
// remove optional after finishing testing of the service
// using this class
export class Device {
    invNum: string;
    url: string;

    deviceId?: string;

    companyId?: string;
    departmentId?: string;
    roomId?: string;
    userId?: string;
    devmodelId?: string;
    supplyId: string[];

    descriptionUrl?: string;
    scanFolder?: string;
    
    serialNumber?: string;
    

    constructor (invNum: string, url: string, serialNumber?: string) {

    }
}