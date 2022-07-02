import News from './news/news';
import Sources from './sources/sources';
import { newsResponse, sourceResponse } from '../../type';

export class AppView {
    protected news: News;
    protected sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: newsResponse) {
        console.log(data);
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourceResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
