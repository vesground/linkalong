import DocumentList from 'routes/DocumentList/index.vue';
import DocumentEdit from 'routes/DocumentEdit/index.vue';
import Search from 'routes/Search/index.vue';

const routes = [
    {
        path: '/',
        redirect: {
          name: 'document.list'
        },
    },
    {
        path: '/document',
        name: 'document.list',
        component: DocumentList
    },
    {
        path: '/document/:id',
        name: 'document.edit',
        component: DocumentEdit,
        props: true
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        props: true,
        meta: {
          breadcrumb: [
            { name: 'Area 1', link: 'area11' },
            { name: 'Area 2' }
          ]
        }
    }
];

// { path: routes.pages.main, component: () => import('./client/components/Main.vue') },
// { path: routes.pages.about, component: () => import('./client/components/About.vue') },

export default routes;
