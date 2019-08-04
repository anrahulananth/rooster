import React, { Component } from 'react'

class Tweets extends Component {
    render () {
        const { tweet, tweet: { user, entities, extended_entities } } = this.props;
        return (
            <div className="tweet">
                <article className="media">
                    <figure className="media-left">
                        <p className="image">
                            <img className="user-image" src={user.profile_image_url} alt="" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{user.name}</strong>
                                {
                                    user.verified && (<img className="verified-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/twitter_verified.png" v-if="tweet.verified" alt="" />)
                                }
                                <small>{' @' + user.screen_name}</small>
                                <small className="time-lapsed">{' . ' + new Date(Number(tweet.timestamp_ms)).toDateString()}</small>
                                <br />
                                <span className="description">{tweet.text}</span>
                            </p>
                        </div>
                        {
                            entities.hashtags && entities.hashtags.length ? (
                                <div className="hashtags">
                                    {entities.hashtags.map((hasttag, hash) => (<div key={hash}>#{hasttag.text}</div>))}
                                </div>
                            ) : ''
                        }
                        {
                            extended_entities && extended_entities.media && extended_entities.media.length ? (
                                <div className="media">
                                    {
                                        extended_entities.media.map((media, key) => {
                                            if (media) {
                                                if (media.type === "photo") {
                                                    return (
                                                        <div className="tweet-image" key={key}>
                                                            <img src={media.media_url} alt="" />
                                                        </div>
                                                    );
                                                }
                                                if (media.type === "video") {
                                                    let videoSource = media.video_info.variants.length && media.video_info.variants.find(video => video.content_type === "video/mp4")
                                                    return (
                                                        <div className="tweet-video" key={key}>
                                                            <video controls>
                                                                <source src={videoSource.url} type={videoSource.content_type} />
                                                            </video>
                                                        </div>
                                                    );
                                                }
                                            }
                                            return '';
                                        })
                                    }
                                </div>                 
                            ) : ''
                        }
                        <nav className="level">
                            <div className="level-left">
                                <a href="/" onClick={e => { e.preventDefault(); }} className="level-item">
                                    <span className="icon is-small"><i className="fa fa-comment"></i></span>
                                </a>
                                <a href="/" onClick={e => { e.preventDefault(); }} className="level-item">
                                    <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                                    {tweet.retweeted && (<p className="bold">{tweet.retweet_count}</p>)}
                                </a>
                                <a href="/" onClick={e => { e.preventDefault(); }} className="level-item heart">
                                    <span className="icon is-small"><i className={`fa ${tweet.favorited ? 'fa-heart' : 'fa-heart-o'}`}></i></span>
                                    {tweet.favorited && (<p className="bold">{tweet.favorite_count}</p>)}
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        )
    }
}

export default Tweets;
