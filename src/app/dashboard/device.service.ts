import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class DeviceService{
    id: number=0;
    viewDashboard: boolean=true;
    // user: any;
    userDevices: any[]=[];

    setId(id: number){
        this.id=id;
    }
    
    getId(){
        return this.id;
    }

    setView(view: boolean){
        this.viewDashboard=view;
    }

    getView(){
        return this.viewDashboard;
    }

    setUserDevices(userDevices: any[]){
        this.userDevices=userDevices;
    }

    getUserDevices(){
        return this.userDevices;
    }
}