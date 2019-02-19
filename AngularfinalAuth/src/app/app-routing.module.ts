import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { SavequestionComponent} from './savequestion/savequestion.component';
import { EditComponent } from './edit/edit.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
     { path: 'register', component: RegisterComponent },

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'userprofile',
        component: UserprofileComponent
    },
    {
        path: 'execution',
        component: EditComponent
    },
    {
        path: 'post/:username',
        component: SavequestionComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
