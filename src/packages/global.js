import Vue from 'vue'

// 自定义公共组件全局注册组件 (可按需)
const components = {
    'wp-action': 'action',
    'wp-button': 'button',
    'wp-cell': 'cell',
    'wp-header': 'header',
    'wp-icon': 'icon',
    'wp-popup': 'popup',
    'wp-tag': 'tag',
    'wp-switch': 'switch',
    'wp-checklist': 'checkList'
};

Object.keys(components).forEach(key => {
    Vue.component(key, () => import(/* webpackChunkName: "g-[request]" */ `../components/${components[key]}`));
});

