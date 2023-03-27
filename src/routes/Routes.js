import React from 'react';
import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Nav from '../components/nav/Nav'

import HomePage from '../pages/home/Home.page';
import PostsPage from '../pages/posts/Posts.page';
import GaleryPage from '../pages/galery/Galery.page';
import ContactsPage from '../pages/contacts/Contacts.page';
import NoFound from '../pages/no-found/NoFound';


export const appRoutes = {
    home: {
        id: 1,
        path: "/",
        element: <HomePage />
    },
    posts: {
        id: 2,
        path: '/posts',
        element: <PostsPage />
    },
    galery: {
        id: 3,
        path: '/galery',
        element: <GaleryPage />
    },
    contacts: {
        id: 4,
        path: '/contacts',
        element: <ContactsPage />
    }

}
const Routes = () => {

    return (
        <div>
            <Nav />
            <ReactRouterRoutes>
                {Object.values(appRoutes).map(({ id, path, element }) => {
                    return <Route key={id} path={path} element={element} />;
                })}
                <Route path='*' element={<NoFound />} />
            </ReactRouterRoutes>
        </div>
    );
};

export default Routes;