import React, { Component } from 'react';
import { css, injectGlobal } from "react-emotion";
import { SearchBox } from './';

const app = css`
    text-align: center;
    background-color: #222;
    color: #fff;
    height: 100vh;
    & a {
    color: #f60;
    }
`;

const appHeader = css`
    padding: 7%;
    color: white;
    & h1 {
    font-size: 6em;
    }
    & h1 span {
    color: #f00;
    }
`;

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export const Home = () => (
    <div className={app}>
        <div className={appHeader}>
            <h1>LOL<span>FY</span></h1>
            <p>Mini LoL Stat Application. Powered by React and NodeJS.</p>
        </div>
        <SearchBox />
    </div>
);