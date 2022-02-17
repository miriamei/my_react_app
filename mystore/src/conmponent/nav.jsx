import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export const Nav=()=>{
    return <nav>
        <Link to="Home"> Home </Link>
        <Link to="MyBasket"> My basket </Link>
        <Link to="Payment"> Payment </Link>
    </nav>
}

