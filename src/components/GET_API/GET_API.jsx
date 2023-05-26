import data from './data.json';

class GET_API {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    idInstance = data.IdInstance;
    apiTokenInstance = data.ApiTokenInstance;

    getDataContact(idInstance, apiTokenInstance, chatId) {
        return fetch(`${this._baseUrl}/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ chatId: `${chatId}@c.us` })
        })
        .then(res => res.json())
        .then(data => data)
    }

    sendMessage(idInstance, apiTokenInstance, chatId, message) {
        return fetch(`${this._baseUrl}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                chatId: chatId,
                message: message
            })
        })
        .then(res => res.json())
        .then(data => data)
    }

    getMessage(idInstance, apiTokenInstance) {
        return fetch(`${this._baseUrl}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`, {
            method: "GET",
            headers: this.headers
        })
        .then(res => res.json())
        .then(data => data)
    }

    deleteMessage(idInstance, apiTokenInstance, receiptId) {
        return fetch(`${this._baseUrl}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => res.json())
        .then(data => data)
    }
}

const get_api = new GET_API({
    baseUrl: 'https://api.green-api.com',
    headers: { "content-type": "application/json" }
})

export default get_api;