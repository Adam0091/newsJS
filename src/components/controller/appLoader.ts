import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '60099d4bee39447a95d9c2fdf2321f43', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
