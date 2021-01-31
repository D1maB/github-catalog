<template>
    <div class="card">
        <div class="card-header">
            <h3>Login</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <form class="login" @submit.prevent="login">

                        <div class="form-group">
                            <label>Email</label>
                            <input required v-model="email" type="text" class="form-control" placeholder="Email"/>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input required v-model="password" type="password" class="form-control" placeholder="Password"/>
                        </div>

                        <hr/>
                        <button class="btn btn-primary" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import store from '../../store'

export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            const { email, password } = this;
			console.log('login');
            const response = await store.dispatch("auth/login", { email, password });
			//console.log(response);
			
            if(response.status != 200){
                alert('Cannot log in')
            } else{
                this.$router.push({name: 'home'});
            }
			
        }
    }
}
</script>
