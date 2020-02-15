export class RequestUtil {

    public static post(path: string, data: any) {
        return fetch(path,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache': 'no-cache'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    public static postWithFiles(path: string, formData: any) {
        return fetch(path,
        {
            method: 'POST',
            credentials: 'include',
            body: formData,
        });
    }

    public static get() {

    }

    public static delete() {

    }

    public static put() {

    }

}
