export type NewsType = {
    author: string | null;
    content: string;
    description: string | null;
    publishedAt: string;
    source: { id: string | null; name: string };
    title: string;
    url: string;
    urlToImage: string | null;
};

export type SourcesType = {
    id: string;
    name: string;
    category: string;
    country: string;
    description: string;
    language: string;
    url: string;
};

export type newsResponse = {
    status: 'ok' | 'error';
    totalResults?: number;
    articles?: NewsType[];
    code?: string;
    message?: string;
};

export type sourceResponse = {
    status: 'ok' | 'error';
    sources?: SourcesType[];
    code?: string;
    message?: string;
};

export type responseType = newsResponse | sourceResponse;

export type optionsType<T> = { [key: string]: T };

// Если что то выглядит как костыль и пахнет как костыль и на вкус как косытль то это навернека костыль
export type callbackType = ((data: responseType) => void) | (() => void);
