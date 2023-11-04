class Requests{
    constructor(){
        this.apiBase = 'http://49.13.31.246:9191/';
        this.routes = {
            signin: 'signin',
            signup: 'signup'
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
}

export default Requests;