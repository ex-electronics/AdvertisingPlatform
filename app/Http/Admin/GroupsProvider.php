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

class GroupsProvider extends Section implements Initializable
{
    /**
     * @var \App\Group
     */
    protected $model;

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        // $this->addToNavigation($priority = 500, function() {
        //     return \App\Group::count();
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
        return 'Группы';
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
               AdminColumn::link('vkid', 'Vk Link'),
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
            AdminFormElement::text('vkid', 'Vk Link')->required(),
            AdminFormElement::text('avatar', 'Avatar')->required(),
            AdminFormElement::radio('group_type', 'Type', [
                0 => 'Group',
                1 => 'Public',
            ])->required(),
            AdminFormElement::select('user_id', 'User', \App\User::class)
                ->setDisplay('name')
                ->required(),
        ]);
    }

    public function onCreate()
    {
        // Создание и редактирование записи идентичны, поэтому перенаправляем на метод редактирования
        return $this->onEdit(null);
    }
}