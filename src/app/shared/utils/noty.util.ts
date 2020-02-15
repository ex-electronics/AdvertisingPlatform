import * as Noty from 'noty';

export class NotyUtil {

    public static success(text: string) {
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: text,
        }).show();
    }

    public static error(text: string) {
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: text,
        }).show();
    }

    public static default(text: string) {
        new Noty({
            layout: 'topRight',
            text: text,
        }).show();
    }

}
