import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { HojadevidaComponent } from './components/hojadevida/hojadevida.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    {path: '', component: UserComponent},
    {path: 'portafolio',component: PortafolioComponent},
    {path: 'hojadevida', component: HojadevidaComponent},
    { path: '', redirectTo: '/portafolio', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouingModule {}


