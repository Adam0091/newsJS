import { callbackType, optionsType, responseType } from '../../type';

class Loader {
    protected baseLink: string;
    protected options: optionsType<string>;

    constructor(baseLink: string, options: optionsType<string>) {
        this.baseLink = baseLink;
        this.options = options;

        console.log(this.options);
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: optionsType<string> },
        callback: callbackType = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: optionsType<string>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: 'GET' | 'POST', endpoint: string, callback: callbackType, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: responseType) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
