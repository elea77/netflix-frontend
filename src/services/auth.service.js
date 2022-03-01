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
    },
    getAllMovies() {
        return fetch(`${apiConfigs.env.API_URL}api/v1/movies`, {
            headers: {
              "content-type": "application/json",
            }
        })
        .then(res => res.json())
    },
    createMovie(movie, token) {
      return fetch(`${apiConfigs.env.API_URL}api/v1/movies`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "authorization": token
          },
          body: JSON.stringify(movie),
        }).then((res) => res.json())
    },
    getMovie(id) {
      return fetch(`${apiConfigs.env.API_URL}api/v1/movies/${id}`, {
          headers: {
            "content-type": "application/json"
          }
        }).then((res) => res.json())
    },
    updateMovie(movie, id, token) {
      return fetch(`${apiConfigs.env.API_URL}api/v1/movies/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "authorization": token
          },
          body: JSON.stringify(movie),
        }).then((res) => res.json())
    },
    getMoviesByCategory(id) {
      return fetch(`${apiConfigs.env.API_URL}api/v1/movies/category/${id}`, {
          headers: {
            "content-type": "application/json"
          }
        }).then((res) => res.json())
    },
    getAllCategories() {
        return fetch(`${apiConfigs.env.API_URL}api/v1/categories`, {
            headers: {
              "content-type": "application/json",
            }
        })
        .then(res => res.json())
    },
    createCategory(category, token) {
      return fetch(`${apiConfigs.env.API_URL}api/v1/categories`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "authorization": token
          },
          body: JSON.stringify(category),
        }).then((res) => res.json())
  },
  getCategory(id) {
    return fetch(`${apiConfigs.env.API_URL}api/v1/categories/${id}`, {
        headers: {
          "content-type": "application/json"
        }
      }).then((res) => res.json())
  },
  updateCategory(category, id, token) {
    return fetch(`${apiConfigs.env.API_URL}api/v1/categories/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "authorization": token
        },
        body: JSON.stringify(category),
      }).then((res) => res.json())
  },
  addElementToWishlist(movie, token) {
    return fetch(`${apiConfigs.env.API_URL}api/v1/wishlist`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authorization": token
        },
        body: JSON.stringify(movie),
      }).then((res) => res.json())
  },
  removeElementToWishlist(movie, token) {
    return fetch(`${apiConfigs.env.API_URL}api/v1/wishlist`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "authorization": token
        },
        body: JSON.stringify(movie),
      }).then((res) => res.json())
  },
  getWishlist(id, token) {
    return fetch(`${apiConfigs.env.API_URL}api/v1/wishlist/${id}`, {
        headers: {
          "content-type": "application/json",
          "authorization": token
        },
      }).then((res) => res.json())
  },
  verifyToken(token) {
    return fetch(`${apiConfigs.env.API_URL}api/v1/verifytoken`, {
        headers: {
            "authorization": token
        }
    }).then(res => res.json())
  },
}