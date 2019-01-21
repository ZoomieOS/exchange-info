<template>
    <f7-page no-toolbar>
        <f7-block-title>{{ $t('title') }}</f7-block-title>
        <f7-list>
            <f7-list-item v-for="currency in info" :title="currency.description" :after="currency.rate_float | currencydecimal + currency.cymbol">
                <f7-icon slot="media"></f7-icon>
            </f7-list-item>
            <f7-list-button link="/">{{ $t('back') }}</f7-list-button>
        </f7-list>
    </f7-page>
</template>
<script>
    import { f7Page, f7LoginScreenTitle, f7List, f7ListItem, f7Label, f7Input, f7ListButton, f7BlockFooter, f7dialog} from 'framework7-vue';
    import axios from 'axios';

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
            f7dialog,
        },
        data() {
            return {
                info: null
            }
        },
        methods: {
        },
        mounted() {
            axios.get('./static/insert.json').then(response => {
                this.info = response.data.bpi
                console.log(response.data.bpi);
            });
        },
        filters: {
            currencydecimal (value) {
                return value.toFixed(2)
            }
        },

    };
</script>
