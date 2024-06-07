import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return ( <
        div >
        <
        h1 > Parent Component < /h1> <
        h2 > { isLoggedIn ? "Welcome, User!" : "Please Log In" } < /h2> <
        LoginForm isLoggedIn = { isLoggedIn }
        onLogin = { handleLogin }
        /> <
        /div>
    );
};

export default App;