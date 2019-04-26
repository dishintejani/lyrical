import React, { Component } from 'react';


class LyricList extends Component {

    onLike(lyricId) {
        console.log(lyricId);
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content }) => {
            return (
                <li key={id} className="collection-item" >
                    {content}
                    <i 
                        className="material-icons thumb-up"
                        onClick={() => this.onLike(id)}
                    >thumb_up</i>
                </li>
            );
        })
    }
    render() {
        if (this.props.lyrics.length) {
            return (
                <ul className="collection">{this.renderLyrics()}</ul>
            );
        }
        return ( <div></div> );
        
    }
}


export default LyricList;
