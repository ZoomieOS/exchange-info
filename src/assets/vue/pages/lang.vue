<template>
    <f7-page no-toolbar no-toolbar no-navbar left>
        <f7-block-title>{{ $t('changeLang') }}</f7-block-title>
<f7-list>
        <f7-list-item :title="$t('chooseLang')" smart-select>
            <select v-model="$i18n.locale" name="lang">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>

            </select>
        </f7-list-item>
    <f7-list-button link="/">{{ $t('back') }}</f7-list-button>
</f7-list>

    </f7-page>
</template>
<script>
    import { f7Page, f7LoginScreenTitle, f7List, f7ListItem, f7Label, f7Input, f7ListButton, f7BlockFooter} from 'framework7-vue';
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
        data () {
            return { langs: ['en', 'ru'] }
        },
        methods: {
        },
    };
</script>
