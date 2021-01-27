<template>
    <div class="card">
        <div class="card-header">
            <h3>Register</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-12">
                    <form class="register" @submit.prevent="register">

                        <div class="text-success" v-if="message">{{message}}</div>

                        <div class="form-group">
                            <label>Email</label>
                            <input required v-model="data.email" type="text" class="form-control" placeholder="Email"/>
                            <div class="text-danger" v-if="errors.email">{{errors.email[0]}}</div>
                        </div>


                        <div class="form-group">
                            <label>Password</label>
                            <input required v-model="data.password" type="password" class="form-control" placeholder="Password"/>
                            <div class="text-danger" v-if="errors.password">{{errors.password[0]}}</div>
                        </div>

                        <hr/>
                        <button class="btn btn-primary" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import AuthAPI from "../../api/auth-api";

export default {
    data() {
        return {
            data: {
                email: '',
                password: '',
            },
            errors: '',
            message: ''
        }
    },
    methods: {
        async register () {
            const { email, password } = this.data;

            try{
                const response = await AuthAPI.register(email, password);
                this.message = response.data.message;

            } catch(e){
                this.errors = e.response.data.errors;
            }
        }
    }
}
</script>
