import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ViewComponent } from "./view/view.component";
import { EditComponent } from "./edit/edit.component";
import { DeviceService } from "../device.service";
import { data } from "../deviceData";
import { Router, RouterOutlet } from "@angular/router";
import { Style } from "../../shared/styleComponent";

@Component({
    standalone: true,
    selector: "app-view-device",
    templateUrl: "./viewDevice.component.html",
    imports: [CommonModule, FormsModule, ViewComponent, EditComponent, RouterOutlet]
})
export class ViewDeviceComponent{   
    @Input() viewDashboard: boolean=true;
    searchDevice: string="";
    userDevices: any[]=this.deviceService.getUserDevices();
    // devices: any[]=data;
    devicesAfter: any;
    deviceLoc: number=-1;
    InputBox=Style.InputBox;

    constructor(private router: Router, private deviceService: DeviceService){}

    ngOnInit(){
        this.onSearch();
        this.viewDashboard=this.deviceService.getView();
    }
    // dec

    onSearch(){
        if(this.searchDevice!==""){
            this.devicesAfter=this.userDevices.filter(device=>
                device.deviceName.toLowerCase().includes(this.searchDevice.toLocaleLowerCase())
            );
        }
        else{
            this.devicesAfter=this.userDevices;
        }
    }

    onView(id: number){
        this.viewDashboard=false;
        this.router.navigate(["./dashboard/view-device/view"]);
        this.deviceService.setId(id);
    }

    onEdit(id: number){
        this.viewDashboard=false;
        this.router.navigate(["./dashboard/view-device/edit"]);
        this.deviceService.setId(id);
    }

    onDelete(id: number){
        this.deviceLoc=this.devicesAfter.findIndex((device: { id: number; })=>device.id===id);
        if(this.deviceLoc!==-1){
            this.userDevices.splice(this.deviceLoc, 1);
            this.devicesAfter=this.userDevices;
            this.router.navigate(["./dashboard/view-device"]);
            this.deviceService.setId(id);
        }
    }
}