import DocumentList from 'routes/DocumentList/index.vue';
import DocumentEdit from 'routes/DocumentEdit/index.vue';
import Search from 'routes/Search.vue';

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
        component: DocumentList
    },
    {
        path: '/text/:id',
        name: 'document.edit',
        component: DocumentEdit,
        props: true
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        props: true
    }
];

// { path: routes.pages.main, component: () => import('./client/components/Main.vue') },
// { path: routes.pages.about, component: () => import('./client/components/About.vue') },

export default routes;
