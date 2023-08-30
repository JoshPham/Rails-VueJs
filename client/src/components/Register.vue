<template>
    <div class="main-container">
        <h3>Sign Up!</h3>
            <form @submit="onSignUp" class="sign-up-form">
                <input class="sign-up-form-email" type="email" v-model="signUpEmail" placeholder="Email" />
                <br />
                <input
                    type="password"
                    class="sign-up-form-password"
                    v-model="signUpPassword"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Sign up" class="sign-up-form-submit" />
            </form>
    </div>
</template>

<script>
import "../store/index.js";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "SessionManager",
    computed: {
        ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
    },
    data() {
        return {
        signUpEmail: "",
        signUpPassword: "",
        loginEmail: "",
        loginPassword: "",
        };
    },
    methods: {
        ...mapActions(["registerUser", "loginUser", "logoutUser"]),
        onSignUp(event) {
            event.preventDefault();
            let data = {
            user: {
            email: this.signUpEmail,
            password: this.signUpPassword,
            },
        };
        this.registerUser(data);
        this.resetData();
        },
        onLogin(event) {
            event.preventDefault();
            let data = {
                user: {
                    email: this.loginEmail,
                    password: this.loginPassword,
                },
            };
            this.loginUser(data);
            this.resetData();
        },
        resetData() {
            this.signUpEmail = "";
            this.signUpPassword = "";
            this.loginEmail = "";
            this.loginPassword = "";
        },
    },
}
</script>