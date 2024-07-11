import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../../device.service";
import { data, featureNames, featurePlaceholders } from "../../deviceData";
import { Router } from "@angular/router";
import { Style } from "../../../shared/styleComponent";

@Component({
    standalone: true,
    selector: "app-view",
    templateUrl: "./view.component.html",
    imports: [CommonModule]
})
export class ViewComponent implements OnInit{
    id: number=0;
    devices: any[]=data;
    device: any;
    featureNames: any[]=featureNames;
    featurePlacecholders: any[]=featurePlaceholders;
    InputBox=Style.InputBox;
    
    constructor(private router: Router, private deviceService: DeviceService){}
    
    ngOnInit(): void {
        this.id=this.deviceService.getId();
        this.device=this.devices.find(dev=>dev.id===this.id);
        console.log(this.device);
    }

    onBack(){
        this.deviceService.setView(true);
        this.router.navigate(["./dashboard/view-device"]);
    }

    onEdit(id: number){
        this.router.navigate(["./dashboard/view-device/edit"]);
        this.deviceService.setId(id);
    }

    onDelete(id: number){
        this.router.navigate(["./dashboard/view-device"]);
        this.deviceService.setId(id);
    }
}