import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { fetchTweets } from '../../actions'

class SearchBar extends Component {

    state = {
        value: ''
    }

    componentDidMount(){
        this.props.fetchTweets({
            _start: 0,
            _limit: 10,
            q: '',
        });
    }

    handleClick = e => {
        const { value } = this.state;
        if (value.length >= 3) {
            this.props.fetchTweets({
                _start: 0,
                _limit: 10,
                q: value
            });
        }    
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    render () {
        const { isLoading } = this.props;
        const { value } = this.state;
        return (
            <header>
                <Navbar bg="dark" variant="dark" className="header">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/rooster.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Rooster'}
                    </Navbar.Brand>
                    <InputGroup>
                        <FormControl
                            placeholder="Search Tweets"
                            aria-label="Search Tweets"
                            aria-describedby="basic-addon1"
                            onChange={this.handleChange}
                            onKeyDown={(e)=>{e.keyCode === 13 && this.handleClick(e)}}
                            value={value}
                        />
                        <Button
                            variant="primary"
                            disabled={isLoading || value.length < 3}
                            onClick={!isLoading ? this.handleClick : null}
                        >
                            {isLoading ? 'Loading…' : 'Search'}
                        </Button>
                    </InputGroup>
                </Navbar>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTweets: page => {
            dispatch(fetchTweets(page))
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)