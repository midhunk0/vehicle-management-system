import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Style } from "../../shared/styleComponent";
import { users } from "../../data";

@Component({
    standalone: true,
    selector: "app-login",
    templateUrl: "./login.component.html",
    imports: [FormsModule]
})
export class LoginComponent{
    InputBox=Style.InputBox;
    users: any[]=users;
    user: any;

    constructor(private router: Router){}

    onLogin(loginData: NgForm){
        console.log(loginData.value);
        if(loginData.value.username!=="" && loginData.value.password!==""){
            this.user=this.users.find(user=>user.username===loginData.value.username);
            if(this.user){
                console.log("user found");
                if(this.user.password===loginData.value.password){
                    console.log("password matches");
                    localStorage.clear();
                    localStorage.setItem("username", loginData.value.username)
                    this.router.navigate(["./dashboard"]);
                }
                else{
                    console.log("password not matches");
                    return;
                }
            }
            else{
                console.log("user not found")
                return;
            }
        }        
    }

    onSwitch(){
        this.router.navigate(["./register"]);
    }
}