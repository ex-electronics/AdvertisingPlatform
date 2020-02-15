import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';

import { LoginRoutes } from './login-routing.module';
import { UserService } from '../shared/serivces/user.service';

// Login Component
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        RouterModule.forChild(LoginRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        ThemeConstants,
        UserService,
    ]
})
export class LoginModule { }
