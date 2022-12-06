import {useHttp} from '../hooks/http.hook'

const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=d53bee0b54871c02144f6a81abbfa320';
    const _baseOffset = 0;

/*     getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    } */

    const getAllCharecters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharecter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        
        return res.data.results.map(_transformComics);
    }

    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }
   
    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            comics: char.comics.items,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
        const _transformComics = (comics) => {
            return {
                id: comics.id,
                title: comics.title,
                description: comics.description ? comics.description : 'There is no description for this comic',
                thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
                pageCount: comics.pageCount ? `${comics.pageCount} pages` : 'There is not information about number of pages',
                language: comics.textObjects.language || 'en-us',
                price: comics.prices.price ? `${comics.prices.price}$` : 'not available'
            }
    }
    return {loading, error, getAllCharecters, getCharecter, clearError, getAllComics, getComics};
}

export default useMarvelService;