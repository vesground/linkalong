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
        component: DocumentList,
        breadcrumb: {
          show: false,
          title: 'Documents'
        },
    },
    {
        path: '/document/:id',
        name: 'document.edit',
        component: DocumentEdit,
        breadcrumb: 'Document Details',
        props: true
    },
    {
        path: '/document/:id/search',
        name: 'search',
        component: Search,
        breadcrumb: 'Search result',
        props: true,
    }
];

export default routes;
