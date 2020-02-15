import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import _ from 'lodash';

import { SETTINGS_ROUTING } from './profile/settings.routing';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';

const ROUTES = [
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'advs',
        loadChildren: './advs/advs.module#AdvsModule'
    },
    {
        path: 'advs/:page',
        loadChildren: './advs/advs.module#AdvsModule'
    },
    {
        path: 'adv/:id',
        loadChildren: './adv/adv.module#AdvModule'
    },

    {
        path: 'exchange',
        loadChildren: './exchange/exchange.module#ExchangeModule'
    },
    {
        path: 'exchange/:page',
        loadChildren: './exchange/exchange.module#ExchangeModule'
    },

    {
        path: 'groups',
        loadChildren: './groups/groups.module#GroupsModule'
    },
    {
        path: 'groups/:page',
        loadChildren: './groups/groups.module#GroupsModule'
    },
    {
        path: 'group/:id',
        loadChildren: './group/group.module#GroupModule'
    },
    {
        path: 'group',
        loadChildren: './groupCreate/groupcreate.module#GroupCreateModule'
    },

    {
        path: 'posts',
        loadChildren: './posts/posts.module#PostsModule'
    },
    {
        path: 'posts/:page',
        loadChildren: './posts/posts.module#PostsModule'
    },
    {
        path: 'post/:id',
        loadChildren: './post/post.module#PostModule'
    },
    {
        path: 'post',
        loadChildren: './post/post.module#PostModule'
    },
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'users/:page',
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'user/:id',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },

    {
        path: 'payments',
        loadChildren: './payments/payments.module#PaymentsModule'
    },
    {
        path: 'payments/:page',
        loadChildren: './payments/payments.module#PaymentsModule'
    },
    {
        path: 'payment',
        loadChildren: './payment/payment.module#PaymentModule'
    },
    {
        path: 'payment/:id',
        loadChildren: './payment/payment.module#PaymentModule'
    },

    // {
    //     path: '**',
    //     loadChildren: './pages/pages.module#PagesModule'
    // },

    {
        path: 'settings',
        loadChildren: './profile/settings/settings.module#SettingsModule'
    },
    {
        path: 'settings/domain',
        loadChildren: './profile/settingsDomain/settingsDomain.module#SettingsDomainModule'
    },
    {
        path: 'settings/action',
        loadChildren: './profile/settingsAction/settingsAction.module#SettingsActionModule'
    },
    {
        path: 'settings/referral',
        loadChildren: './profile/settingsReferral/settingsReferral.module#SettingsReferralModule'
    },
    {
        path: 'tarifs',
        loadChildren: './profile/tarifs/tarifs.module#TarifsModule'
    },
];

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        component: CommonLayoutComponent,
        children: ROUTES.concat(SETTINGS_ROUTING),
    }
];

