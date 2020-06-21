import DocmentList from './components/DocmentList.vue'
import DocmentEdit from './components/DocmentEdit.vue'
import Search from './components/Search.vue'

const routes = [
    {
        path: '/',
        redirect: {
          name: 'document.list'
        },
    },
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
