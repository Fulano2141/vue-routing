import UserStart from './components/user/UserStart'
import UserEdit from './components/user/UserEdit'
import UserDetail from './components/user/UserDetail'

import Home from './components/Home'
import Header from './components/Header'

// import User from './components/user/User'
// Load routes lazily. Its for bigger proyects, create a new build.js with that importing paths
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'))
    });
}


export const routes = [
    {
        path: '/', name: 'home', components: {
            default: Home,
            'header-top': Header
        }
    },
    // { path: '/user/:id', component: User },
    {
        path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        children: [
            { path: '', component: UserStart },
            {
                path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
                    console.log('inside route setup');
                    next();
                }
            },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ],
    },
    // try http://localhost:8080/redirect-me with this 
    { path: '/redirect-me', redirect: '/user' },
    // or this
    // { path: '/redirect-me', redirect: { name: 'home' } },

    // Redirect everything
    { path: '*', redirect: { name: 'home' } }
];