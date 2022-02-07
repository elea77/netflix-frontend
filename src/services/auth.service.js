import apiConfigs from "../../next.config.js";

export default {
    register(user) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    login(user) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/login`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          }).then((res) => res.json())
    },
    getUser(token) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users/get-user`, {
            headers: {
                "authorization":token
            }
        })
        .then(res => res.json())
    },
    getUserEmail(email) {
        return fetch(`${apiConfigs.env.API_URL}api/v1/users/get-email/${email}`, {
            headers: {
              "content-type": "application/json",
            }
        })
        .then(res => res.json())
    }
}