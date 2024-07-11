import { Component } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { CreateDeviceComponent } from "./createDevice/createDevice.component";
import { ViewDeviceComponent } from "./viewDevice/viewDevice.component";
import { CommonModule } from "@angular/common";
import { users } from "../data";
import { DeviceService } from "./device.service";
import { data } from "./deviceData";

@Component({
    standalone: true,
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    imports: [CreateDeviceComponent, ViewDeviceComponent, CommonModule, RouterOutlet]
})
export class DashboardComponent {
	username: any;
	active: string = 'dashboard'; 
    users: any[]=users;
    user: any;
	devices: any[]=data;
	device: any;
	userDevices: string[]=[];
	final: any[]=[];

	constructor(private router: Router, private deviceService: DeviceService) {}

	ngOnInit() {
		this.username = localStorage.getItem("username");
		this.user=this.users.find(user=>user.username===this.username);
		if(!this.user){
			this.onLogout();
		}
		this.userDevices=this.user.devices;
		for(let i=0;i<this.userDevices.length;i++){
			this.device=this.devices.find(device=>device.deviceId===this.userDevices[i]);
			this.final.push(this.device);
		}
		this.deviceService.setUserDevices(this.final);
	}

	onDashboard() {
		this.active = 'dashboard';
		this.router.navigate(["./dashboard"]);
	}

	onCreate() {
		this.active = 'create';
		this.router.navigate(["./dashboard/create-device"]);
	}

	onView() {
		this.active = 'view';
		this.router.navigate(["./dashboard/view-device"]);
	}

	onLogout() {
		this.router.navigate(["./login"]);
	}
}
