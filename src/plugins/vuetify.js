import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#121212',
                secondary: '#1E1E1E',
                accent: '#BB86FC',
                error: '#CF6679',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00'
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }
})