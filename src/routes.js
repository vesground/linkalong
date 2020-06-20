import DocmentList from './components/DocmentList.vue'
import DocmentEdit from './components/DocmentEdit.vue'
import Search from './components/Search.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'document',
    //     component: DocmentList,
    //     redirect: {
    //       name: 'activate.create_schedule'
    //     },
    // },
    {
        path: '/text',
        name: 'document.list',
        component: DocmentList
    },
    {
        path: '/text/:id',
        name: 'document.edit',
        component: DocmentEdit,
        props: true
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        props: true
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
