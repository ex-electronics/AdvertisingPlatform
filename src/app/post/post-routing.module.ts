import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Post Components
import { PostComponent } from './post.component';

export const PostRoutes: Routes = [
    {
        path: '',
        component: PostComponent,
        data: {
           title: 'Post'
        }
    }
];

