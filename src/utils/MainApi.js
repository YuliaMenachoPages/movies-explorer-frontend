const serverUrl = 'http://localhost:3000';
 class MainApi {
    constructor({initialUrl}) {
        this.initialUrl = initialUrl;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getInitialCards() {
        return fetch(`${this.initialUrl}/cards`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json; charset=UTF-8'
            },
        })
            .then(res => this._getResponseData(res));
    }

    addCard(cardData) {
        return fetch(`${this.initialUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link,
            }),
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

    getUserData() {
        return fetch(`${this.initialUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },        })
            .then(res => this._getResponseData(res))
    }

    changeUserData({name, email}) {
        return fetch(`${this.initialUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                name,
                email,
            }),
        })
            .then(res => this._getResponseData(res))
    }
}


export const api = new MainApi({initialUrl: serverUrl});

