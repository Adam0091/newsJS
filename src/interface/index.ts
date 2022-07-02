import { NewsType, SourcesType } from '../type';

export interface INews {
    draw(data: NewsType[]): void;
}

export interface ISources {
    draw(data: SourcesType[]): void;
}
