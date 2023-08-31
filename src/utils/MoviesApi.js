const serverUrl = 'https://api.nomoreparties.co';
class MoviesApi {
    constructor({initialUrl}) {
        this.initialUrl = initialUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialMovies() {
        return fetch(`${this.initialUrl}/beatfilm-movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => this._getResponseData(res));
    }



    addLike(cardId) {
        return fetch(`${this.initialUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => this._getResponseData(res));
    }

    deleteLike(cardId) {
        return fetch(`${this.initialUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => this._getResponseData(res));
    }

    changeLikeCardStatus(cardId, isLiked) {
        if (!isLiked) {
            return this.addLike(cardId);
        }
        return this.deleteLike(cardId);
    }

    deleteCard(cardId) {
        return fetch(`${this.initialUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => this._getResponseData(res))
            .catch((err) => {
                console.log(err);
            });
    }
}


export const moviesApi = new MoviesApi({initialUrl: serverUrl});

