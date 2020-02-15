<?php

namespace App\Http\Admin;

use AdminColumn;
use AdminDisplay;
use AdminForm;
use AdminFormElement;
use SleepingOwl\Admin\Contracts\DisplayInterface;
use SleepingOwl\Admin\Contracts\FormInterface;
use SleepingOwl\Admin\Contracts\Initializable;
use SleepingOwl\Admin\Section;

class UsersProvider extends Section implements Initializable
{
    /**
     * @var \App\User
     */
    protected $model;

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        // $this->addToNavigation($priority = 500, function() {
        //     return \App\User::count();
        // });
    }

    /**
     * @return string
     */
    public function getIcon()
    {
        return 'fa fa-group';
    }

    /**
     * @return string|\Symfony\Component\Translation\TranslatorInterface
     */
    public function getTitle()
    {
        return 'Пользователи';
    }

    /**
     * @return DisplayInterface
     */
    public function onDisplay()
    {
        return AdminDisplay::table()
           ->setHtmlAttribute('class', 'table-primary')
           ->setColumns([
               AdminColumn::text('id', '#')->setWidth('30px'),
               AdminColumn::link('name', 'Name'),
               AdminColumn::link('email', 'E-mail')->setWidth('100px'),
               AdminColumn::link('social_id', 'VK Link')->setWidth('100px'),
            ])->paginate(20);
    }

    /**
     * @param int $id
     *
     * @return FormInterface
     */
    public function onEdit($id)
    {
        return AdminForm::panel()->addBody([
            AdminFormElement::text('name', 'Name')->required(),
            AdminFormElement::text('login', 'Login')->required(),
            AdminFormElement::text('social_id', 'VK Link')->required(),
            AdminFormElement::text('email', 'E-mail')->required(),
            AdminFormElement::select('role_id', 'Role', \App\Role::class)
                ->setDisplay('role')
                ->required(),
            AdminFormElement::select('referal_id', 'Referal', \App\User::class)
                ->setDisplay('name'),
            AdminFormElement::datetime('last_activity', 'Last Activity'),
            AdminFormElement::datetime('Paymented_at', 'Paymented at'),
        ]);
    }
}