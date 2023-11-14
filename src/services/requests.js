class Requests{
    constructor(){
        this.apiBase = 'http://49.13.31.246:9191/';
        this.routes = {
            signin: 'signin',
            signup: 'signup',
            destroy_session: "destroy-session",
            me: 'me',
        }
    }

    // Registration
    POST_REG_USER(data){
        return fetch(this.apiBase + this.routes.signup,
            {
                headers:{
                    "content-type": "application/json",
                },
                "body": JSON.stringify(data),
                "method": "POST"
            })
            .then(res => res.json());
    }

    // Login
    POST_LOG_USER(data){
        return fetch(this.apiBase + this.routes.signin,
            {
                headers:{
                    "content-type": "application/json",
                },
                "body": JSON.stringify(data),
                "method": "POST"
            })
            .then(res => res.json());
    }

    // user logout
    POST_LOGOUT_USER(token){
        return fetch(this.apiBase + this.routes.destroy_session, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": token
            }
          })
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(data => {
            // Обработка успешного ответа от сервера (если необходимо)
          })
          .catch(error => {
            console.error("There has been a problem with your fetch operation:", error);
          });
    }

    // get user information
    GET_INFO_USER(data) {
        return fetch(this.apiBase + this.routes.me, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": data
            }
        })
        .then(res => res.json())
        .catch(error => {
            console.error('Ошибка при получении данных пользователя:', error);
        });
    }
    // send the info from profile edit page
    PUT_INFO_USER(token, data) {
        return fetch(this.apiBase + this.routes.me, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        });
    }

}

export default Requests;