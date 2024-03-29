import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my react router</h1>
            <nav>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/friends">Friends</CustomLink>
                    <CustomLink to='/posts'>Posts</CustomLink>
                    <CustomLink to='/countries'>Countries</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;