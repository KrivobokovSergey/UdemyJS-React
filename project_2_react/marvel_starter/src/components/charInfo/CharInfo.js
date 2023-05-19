import { Component, useEffect, useState } from 'react';
import Spiner from '../spiner/Spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';
//import thor from '../../resources/img/thor.jpeg';

const CharInfo = (props) => {

    const [char, setChar] = useState(null),
        [loading, setLoading] = useState(false),
        [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateChar();
    }, [])

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const updateChar = () => {
        const { charId } = props;

        if (!charId) {
            return;
        }

        onCharLoading();

        marvelService
            .getCharacter(charId)
            .then(onCharLoaded)
            .catch(onError)
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const onCharLoading = () => {
        setLoading(true);
    }

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(false);
    }


    const skeleton = char || loading || error ? null : <Skeleton/>

    const errorMessage = error ? <ErrorMessage /> : null,
            spiner = loading ? <Spiner /> : null,
            content = !(loading || error || !char) ? <View char={char} /> : null;
    
    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spiner}
            {content}
        </div>
    )

}

const View = ({ char }) => {

    const { name, description, thumbnail, homepage, wiki, comics } = char;
    let imgStyle = thumbnail.slice(-23) === 'image_not_available.jpg' ? {'objectFit':'contain'} : {'objectFit':'cover'};

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} style={imgStyle} alt={name} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character.'}
                {
                    comics.map((item, i) => {
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CharInfo;