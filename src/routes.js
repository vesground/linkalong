import DocmentList from './components/DocmentList.vue'
import DocmentEdit from './components/DocmentEdit.vue'

const routes = [
    {
        path: '/',
        name: 'DocmentList',
        component: DocmentList
    },
    {
        path: '/text',
        name: 'DocmentList',
        component: DocmentList
    },
    {
        path: '/text/:id',
        name: 'DocmentEdit',
        component: DocmentEdit
    }
];

export default routes;


// // Import components
// import page1Component from './page-1.vue';
// import page2Component from './page-2.vue';
//
// const routes = [
//     { path: '/', component: require('./index.vue').default },
//     { path: '/page-1', component: require('./page-1.vue').default },
//     { path: '/purchase', component: require('./page-2.vue').default }
// ];
