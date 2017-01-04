<template>
    <div id="app">
        Username: <input v-model="username" type="text" class="form-control" placeholder="Username">
        Password: <input v-model="password" type="password" class="form-control" placeholder="Password">
        <button v-on:click="login" class="btn btn-primary">Login</button>
    </div>
</template>

<script>
    import Auth from '../auth'
    export default {
        name: 'login',
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                // TODO: Redirect
                // TODO: Make sure login() is returning the correct boolean
                if (Auth.login(this.$http, this.$data.username, this.$data.password)) {
                    console.log('Logged in!')
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            }
        }
    }
</script>