import { ISources } from '../../../interface';
import { SourcesType } from '../../../type';
import './sources.css';

class Sources implements ISources {
    draw(data: SourcesType[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
