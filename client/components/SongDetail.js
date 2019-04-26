import React, { Component } from 'react';
import { Link } from "react-router";
import fetchSong from "../queries/fetchSong";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
    render() {
        if (this.props.data.loading) {
            return (
                <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            )
        }
        const { song } = this.props.data;
        return (
            <div>
                <Link to="/" >Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate songId={this.props.params.id}/>
            </div>
        );
        
    }
}

export default graphql(fetchSong, {
    options: (props) => { return { variables : { id : props.params.id }}}
})(SongDetail);
