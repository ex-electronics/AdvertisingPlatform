import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeConstants } from '../shared/config/theme-constant';

import { PostRoutes } from './post-routing.module';

// Post Component
import { PostComponent } from './post.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from '../shared/inspectors/auth.inspector';

import { PostService } from '../shared/serivces/post.service';

@NgModule({
    imports: [
        RouterModule.forChild(PostRoutes),
        FormsModule,
        HttpClientModule,
        HttpModule,
        CommonModule,
    ],
    declarations: [
        PostComponent
    ],
    providers: [
        ThemeConstants,
        PostService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ]
})
export class PostModule { }
