import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchNextTweets } from '../../actions'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Tweets from '../cards/Tweets'

class TweetsContainer extends Component {

    handleClick = e => {
        const { page } = this.props;
        this.props.fetchTweets(page);
    }

    render () {
        const { tweets, isLoading, page: {q} } = this.props;
        return (
            <Container className="tweetsContainer">
                {
                    tweets.length ? tweets.map((tweet, key) => (<Tweets key={key} tweet={tweet}></Tweets>)) : q.length >= 3 ? <div className="no-tweets">No Tweets found for query {q}</div> : ''
                }
                {
                    tweets.length >= 10 && !isLoading ? <Button variant="primary" size="lg" block onClick={this.handleClick}>Load More</Button> : ''
                }
                {
                    isLoading ? <Spinner animation="border" variant="secondary" className="spinner"/> : ''
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        tweets: state.tweets,
        isLoading: state.isLoading,
        page: state.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTweets: page => {
            dispatch(fetchNextTweets(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer)
