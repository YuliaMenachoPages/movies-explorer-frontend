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
         return fetch(`${this.initialUrl}/movies`, {
             method: 'GET',
             headers: {
                 authorization: `Bearer ${localStorage.getItem('token')}`,
                 'Content-Type': 'application/json; charset=UTF-8'
             },
         })
             .then(res => this._getResponseData(res));
     }

     saveMovie(movie) {
         return fetch(`${this.initialUrl}/movies`, {
             method: 'POST',
             headers: {
                 authorization: `Bearer ${localStorage.getItem('token')}`,
                 'Content-Type': 'application/json; charset=UTF-8'
             },
             body: JSON.stringify(movie),
         })
             .then(res => this._getResponseData(res));
     }

     deleteMovie(id) {
         return fetch(`${this.initialUrl}/movies/${id}`, {
             method: 'DELETE',
             headers: {
                 authorization: `Bearer ${localStorage.getItem('token')}`,
                 'Content-Type': 'application/json; charset=UTF-8'
             },
         })
             .then(res => this._getResponseData(res));
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

