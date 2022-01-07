import {createContext} from 'react';

export const UserContext = createContext({
    userId: null,
    firstName: '',
    lastName: '',
    email: '',
    teamCode: '',
    role: '',
    isLoggedIn: false
});