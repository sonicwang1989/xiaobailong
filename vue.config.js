module.exports = {
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap((args) => {
                args[0].title = '小白龙';
                return args;
            });
    },
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
        },
    }
};