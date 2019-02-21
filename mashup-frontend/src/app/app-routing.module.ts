import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { UserComponent } from './_components/user/user.component';
import { RegisterComponent } from './_components/register/register.component';
import { SavequestionComponent} from './_components/savequestion/savequestion.component';
import { EditComponent } from './_components/edit/edit.component';
import { UserprofileComponent } from './_components/userprofile/userprofile.component';
import { SubmissionComponent } from './submission/submission.component';


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
    },
    {
        path: 'submission-component',
        component: SubmissionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
