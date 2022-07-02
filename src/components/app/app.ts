import { responseType } from '../../type';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    protected controller: AppController;
    protected view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: responseType) => this.view.drawNews(data))
            );
        this.controller.getSources((data: responseType) => this.view.drawSources(data));
    }
}

export default App;
