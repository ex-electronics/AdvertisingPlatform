export class FormUtil {

    public static toJson(form) {
        const data = {};

        form.find('textarea, input').each((index, element) => {
            const field = $(element);

            data[field.attr('name')] = field.val();
        });

        return data;
    }

}
