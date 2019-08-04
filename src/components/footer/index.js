import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export const Footer = (props) => {
    return (
        <footer>
            <Navbar  className="footer" bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/rooster.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Rooster '}
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div> */}
                </Navbar.Brand>
                Copyrights - RahulAnantharama &copy; 2019
            </Navbar>
        </footer>
    );
}

