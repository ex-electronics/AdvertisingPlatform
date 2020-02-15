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

class OrdersProvider extends Section implements Initializable
{
    /**
     * @var \App\Payment
     */
    protected $model;

    /**
     * Initialize class.
     */
    public function initialize()
    {
        // Добавление пункта меню и счетчика кол-ва записей в разделе
        // $this->addToNavigation($priority = 500, function() {
        //     return \App\Payment::count();
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
        return 'Оплаты';
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
               //AdminColumn::link('name', 'Name'),
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
            AdminFormElement::textarea('form', 'Form')->required(),
            AdminFormElement::text('public_key', 'Public Key')->required(),
            AdminFormElement::text('private_key', 'Private Key')->required(),
            AdminFormElement::select('payment_type_id', 'Type', \App\PaymentType::class)
                ->setDisplay('name')
                ->required(),
            AdminFormElement::select('user_id', 'User', \App\User::class)
                ->setDisplay('name')
                ->required(),
            AdminFormElement::radio('status', 'Status', [
                0 => 'Off',
                1 => 'On',
            ])->required(),
        ]);
    }

    public function onCreate()
    {
        // Создание и редактирование записи идентичны, поэтому перенаправляем на метод редактирования
        return $this->onEdit(null);
    }
}