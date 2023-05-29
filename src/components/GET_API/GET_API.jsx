class GET_API {
    constructor(config) {
      this._baseUrl = config.baseUrl;
      this._headers = config.headers;
    }
  
    getDataContact = async (chatId) => {
      const idInstance = localStorage.getItem('IdInstance');
      const apiTokenInstance = localStorage.getItem('ApiTokenInstance');
  
      try {
        const response = await fetch(`${this._baseUrl}/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({ chatId: `${chatId}@c.us` })
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    sendMessage = async (chatId, message) => {
      const idInstance = localStorage.getItem('IdInstance');
      const apiTokenInstance = localStorage.getItem('ApiTokenInstance');
  
      try {
        const response = await fetch(`${this._baseUrl}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
            chatId: chatId,
            message: message
          })
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    getMessage = async () => {
      const idInstance = localStorage.getItem('IdInstance');
      const apiTokenInstance = localStorage.getItem('ApiTokenInstance');
  
      try {
        const response = await fetch(`${this._baseUrl}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`, {
          method: "GET",
          headers: this._headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  
    deleteMessage = async (receiptId) => {
      const idInstance = localStorage.getItem('IdInstance');
      const apiTokenInstance = localStorage.getItem('ApiTokenInstance');
  
      try {
        const response = await fetch(`${this._baseUrl}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`, {
          method: "DELETE",
          headers: this._headers
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  const get_api = new GET_API({
    baseUrl: 'https://api.green-api.com',
    headers: { "content-type": "application/json" }
  });
  
  export default get_api;