import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CivilComponent} from './civil/civil.component';
import {HomeComponent} from './civil/home/home.component';
import {RegisterComponent} from './civil/register/register.component';
import {ProfileComponent} from './civil/profile/profile.component';
import {UploadPaperComponent} from './civil/upload-paper/upload-paper.component';
import {LoginComponent} from './civil/login/login.component';
import {AboutComponent} from './civil/about/about.component';
import {MembersComponent} from './civil/members/members.component';

const routes: Routes = [
    {
        path: '',
        component: CivilComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },

            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'upload-paper',
                component: UploadPaperComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'members',
                component: MembersComponent
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },


        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
