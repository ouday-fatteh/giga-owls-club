import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Explore from '../Components/Explore/Explore';

class Home extends Component {
    render() {
        return (
            <div>
                      <Explore />
                      <Navbar />
            </div>
        );
    }
}

export default Home;