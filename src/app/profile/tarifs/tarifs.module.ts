import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ThemeConstants } from '../../shared/config/theme-constant';

import { TarifsRoutes } from './tarifs-routing.module';

// Tarifs Component
import { TarifsComponent } from './tarifs.component';
import { TarifService } from '../../shared/serivces/tarif.service';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../../shared/inspectors/auth.inspector';

@NgModule({
    imports: [
        RouterModule.forChild(TarifsRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        TarifsComponent
    ],
    providers: [
        ThemeConstants,
        TarifService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class TarifsModule { }
