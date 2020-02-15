import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';
import { CommonModule } from '@angular/common';

import { PaymentRoutes } from './payment-routing.module';
import { GroupService } from '../shared/serivces/group.service';

// Group Component
import { PaymentComponent } from './payment.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(PaymentRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        PaymentComponent
    ],
    providers: [
        ThemeConstants,
        GroupService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class PaymentModule { }
