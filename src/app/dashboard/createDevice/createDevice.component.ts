import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Style } from "../../shared/styleComponent";
import { featureNames, featurePlaceholders } from "../deviceData";
import { DeviceService } from "../device.service";

@Component({
    standalone: true,
    selector: "app-create-device",
    templateUrl: "./createDevice.component.html",
    imports: [FormsModule, CommonModule],
})

export class CreateDeviceComponent{
    InputBox=Style.InputBox;
    next: boolean=true;
    form: object[]=[];
    featureNames: any[]=featureNames;
    featurePlacecholders: any[]=featurePlaceholders;
    userDevices: any[]=this.deviceService.getUserDevices();

    constructor(private router: Router, private deviceService: DeviceService){}

    // onNext(firstForm: NgForm){
    //     this.next=false;
    //     this.form.push(firstForm.value);
    // }
    
    // onPrevious(){
    //     this.form.splice(0,1);
    //     this.next=true;
    // }

    onSubmit(formData: NgForm){
        this.router.navigate(["./dashboard/view-device"]);
        // this.form.push(formData.value);
        this.userDevices.push(formData.value);
        console.log(this.userDevices);

    }
}