<template>
    <f7-page no-toolbar no-navbar no-swipeback login-screen left>
        <f7-login-screen-title>{{ $t('title') }}</f7-login-screen-title>
        <f7-list form>
            <f7-list-item>
                <f7-label>{{ $t('emailLabel') }}</f7-label>
                <f7-input type="email" :placeholder="$t('emailInput')" @input="email= $event.target.value"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>{{ $t('passwordLabel') }}</f7-label>
                <f7-input type="password" :placeholder="$t('passwordValue')" @input="password= $event.target.value"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-button @click="login">{{ $t('signIn') }}</f7-list-button>
            <f7-list-button link="/reg/">{{ $t('signUp') }}</f7-list-button>
            <f7-block-footer>{{ $t('description') }}</f7-block-footer>
            <f7-list-button link="/change-lang/">{{ $t('changeLang') }}</f7-list-button>
        </f7-list>

    </f7-page>
</template>
<script>
    import { f7Page, f7LoginScreenTitle, f7List, f7ListItem, f7Label, f7Input, f7ListButton, f7BlockFooter } from 'framework7-vue';
    import firebase from 'firebase';
    export default {
        components: {
            f7Page,
            f7LoginScreenTitle,
            f7List,
            f7ListItem,
            f7Label,
            f7Input,
            f7ListButton,
            f7BlockFooter,
        },
        name: 'auth',
        data() {
            return {
                email: 'string',
                password: '',
            };
        },
        methods: {
            login: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$f7router.navigate('/main/');
                    },
                    (err) => {
                        this.$f7.dialog.alert('Ooops...' + err.message);
                    }
                )
            }
        },
    };
</script>
