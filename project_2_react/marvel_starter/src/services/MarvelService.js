import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

    const { loading, request, error, clearError} = useHttp();


    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=48ae27b24ea819747b7e888f5b0e544b';
    const _baseOffset = 210;
    const _comicsOffset = 0;

    

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
        return res.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
        return _transformCharacter(res.data.results[0]);
    }

    const getAllComics = async (offset = _comicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

    const _transformComics = (comics) => {
        return {
            title: comics.title,
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            description: comics.description,
            pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
            id: comics.id,
            language: comics.textObjects[0]?.language || "en-us",
            price: comics.prices[0].price
        }
    }

    const _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character.',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            id: char.id,
            comics: char.comics.items
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic}
}

export default useMarvelService;