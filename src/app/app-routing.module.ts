import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CivilComponent} from './civil/civil.component';
import {HomeComponent} from './civil/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: CivilComponent,
        children: [
            {
                    path: 'home',
                component: HomeComponent
            }
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
