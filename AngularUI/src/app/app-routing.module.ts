import { Component } from '@angular/core';
// import { SavequestionComponent } from './savequestion/savequestion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
// import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register.1/register.component';
import { SavequestionComponent} from './savequestion/savequestion.component';
import { AuthGuard } from './_guards/auth.guard';
import { EditComponent } from './edit/edit.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [

    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' },
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
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    // {
    //     path: 'signup',
    //     component: RegisterComponent
    // },
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
