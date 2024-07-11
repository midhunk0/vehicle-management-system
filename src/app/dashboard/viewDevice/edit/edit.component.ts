import { Component } from "@angular/core";
import { data, featureNames, featurePlaceholders } from "../../deviceData";
import { DeviceService } from "../../device.service";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { Style } from "../../../shared/styleComponent";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
    standalone: true,
    selector: "app-edit",
    templateUrl: "./edit.component.html",
    imports: [CommonModule, FormsModule]
})
export class EditComponent{
    id: number=0;
    devices: any[]=data;
    device: any;
    featureNames: any[]=featureNames;
    featurePlacecholders: any[]=featurePlaceholders;
    InputBox=Style.InputBox;
    next: boolean=true;
    form: any[]=[];
    
    constructor(private router: Router, private deviceService: DeviceService){}
    
    ngOnInit(): void {
        this.id=this.deviceService.getId();
        for(let i=0;i<this.devices.length;i++){
            if(this.devices[i].id===this.id){
                this.device=this.devices[i];
            }
        }
    }

    onNext(firstForm: NgForm){
        this.next=false;
        this.form.push(firstForm.value);
    }
    
    onPrevious(){
        this.form.splice(0,1);
        this.next=true;
    }

    onBack(){
        this.router.navigate(["./dashboard/view-device"]);
    }

    onDelete(id: number){
        this.router.navigate(["./dashboard/view-device"]);
        this.deviceService.setId(id);
    }

    onUpdate(formData: NgForm){
        this.form.push(formData.value)
        console.log(this.form);
        this.router.navigate(["./dashboard/view-device/view"]);
    }

}