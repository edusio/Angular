import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { MenuComponent } from '../modules/menu/menu.component';
import { FooterComponent } from '../modules/footer/footer.component';
import { HomeComponent } from '../modules/home/home.component';
import { ContactComponent } from '../modules/contact/contact.component';


const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'contact', component: ContactComponent}	
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);