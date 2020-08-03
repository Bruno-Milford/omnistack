import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing/index';
import TeacherList from './pages/Landing/TeacherList';
import TeacherForm from './pages/Landing/TeacherForm/index';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Landing } />
            <Route path="/study" component={ TeacherList } />
            <Route path="/give-classes" component={ TeacherForm } />
        </BrowserRouter>
    );
}

export default Routes;
