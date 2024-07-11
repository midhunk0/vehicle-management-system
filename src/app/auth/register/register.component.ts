import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Style } from "../../shared/styleComponent";
import { users } from "../../data";

interface UserInterface {
    address: string;
    devices?: string[];
    email: string;
    name: string;
    password: string;
    phone: string;
    status: string;
    username: string;
}

@Component({
    standalone: true,
    selector: "app-register",
    templateUrl: "./register.component.html",
    imports: [FormsModule]

})

export class RegisterComponent{
    InputBox=Style.InputBox;
    users: any[]=users;
    user: any;

    constructor(private router: Router){}

    ngOnInit(){
        console.log(users);
    }

    onRegister(registerData: NgForm){        
        console.log(registerData.value.username, registerData.value.email);
        if(registerData.value!==""){
            this.user=this.users.find(user=>user.username===registerData.value.username)||this.users.find(user=>user.email===registerData.value.email);
            if(this.user){
                console.log("user already present");
                return;
            }
            else{
                console.log("you can register");
                if(registerData.value.password!==registerData.value.confirmPassword){
                    console.log("passwords do not matches");
                    return;
                }
                else{
                    console.log("password matches, new user registered");
                    // const obj: UserInterface={
                    //     address: registerData.value.address,
                    //     devices: [],
                    //     email: registerData.value.email,
                    //     name: registerData.value.name,
                    //     password: registerData.value.password,
                    //     phone: registerData.value.phone,
                    //     status: registerData.value.status,
                    //     username: registerData.value.username
                    // };
                    const obj: any={
                        address: registerData.value.address,
                        devices: [],
                        email: registerData.value.email,
                        name: registerData.value.name,
                        password: registerData.value.password,
                        phone: registerData.value.phone,
                        status: registerData.value.status,
                        username: registerData.value.username
                    };
                    users.push(obj);
                    console.log(users);
                    localStorage.clear();
                    localStorage.setItem("username", registerData.value.username);
                    this.router.navigate(["./dashboard"]);
                }
            }
        }
    }


    onSwitch(){
        this.router.navigate(["./login"]);
    }

}