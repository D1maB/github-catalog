import AuthAPI from "../api/auth-api";

const module = {
    namespaced: true,
    state: {
        token: localStorage.getItem('user-token') || '',
        status: ''
    },
    mutations: {
        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
        AUTH_LOGOUT: (state) => {
            state.user = {}
            state.token = ''
        },
    },
    actions: {
        async login({commit, dispatch}, {email, password}) {
            try{
                commit('AUTH_REQUEST')
                const response = await AuthAPI.login(email, password);
                //console.log(response);

                const token = response.data.access_token;
                localStorage.setItem('user-token', token);

                //axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

                commit('AUTH_SUCCESS', token)
                return response;
            } catch(err){
                commit('AUTH_ERROR', err);
                localStorage.removeItem('user-token')
                return err.response;
            }

        },
    },
    getters: {
        isAuthenticated: state => !!state.token,
    }
}

export default module
