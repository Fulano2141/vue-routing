import User from './components/user/User'
import Home from './components/Home'
import UserStart from './components/user/UserStart'
import UserEdit from './components/user/UserEdit'
import UserDetail from './components/user/UserDetail'

export const routes = [
    { path: '/', component: Home, name: 'home' },
    // { path: '/user/:id', component: User },
    {
        path: '/user',
        component: User,
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ],
    },
];