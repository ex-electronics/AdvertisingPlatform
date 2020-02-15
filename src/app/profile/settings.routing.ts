export const SETTINGS_ROUTING = [
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
