import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateDeviceComponent } from './dashboard/createDevice/createDevice.component';
import { ViewDeviceComponent } from './dashboard/viewDevice/viewDevice.component';
import { ViewComponent } from './dashboard/viewDevice/view/view.component';
import { EditComponent } from './dashboard/viewDevice/edit/edit.component';

export const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "dashboard", component: DashboardComponent, children: [
        { path: "", redirectTo: "./dashboard", pathMatch: "full" },
        { path: "create-device", component: CreateDeviceComponent },
        { path: "view-device", component: ViewDeviceComponent, children: [
            { path: "", redirectTo: "./view-device", pathMatch: "full" },
            { path: "view", component: ViewComponent, pathMatch: "full" },
            { path: "edit", component: EditComponent }
        ]}
    ]},
];



// import { Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { CreateDeviceComponent } from './dashboard/createDevice/createDevice.component';
// import { ViewDeviceComponent } from './dashboard/viewDevice/viewDevice.component';
// import { ViewComponent } from './dashboard/viewDevice/view/view.component';
// import { EditComponent } from './dashboard/viewDevice/edit/edit.component';

// export const routes: Routes = [
//     { path: "", redirectTo: "login", pathMatch: "full" },
//     { path: "login", component: LoginComponent },
//     { path: "register", component: RegisterComponent },
//     { path: "dashboard", component: DashboardComponent },
//     { path: "dashboard/create-device", component: CreateDeviceComponent },
//     { path: "dashboard/view-device", component: ViewDeviceComponent },
//     { path: "dashboard/view-device/view", component: ViewComponent },
//     { path: "dashboard/view-device/edit", component: EditComponent }
// ];
