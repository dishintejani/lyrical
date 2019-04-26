import React, { Component } from 'react';
import query from "../queries/fetchSongs";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({variables: {id}})
            .then (() => this.props.data.refetch());
    }
    renderSongs() {
        return this.props.data.songs.map(({ id, title }) => {
            return ( 
                <li key={id} className="collection-item">
                    <Link to={`songs/${id}`} className="textDecoration-none">
                        {title}
                    </Link >
                    <i className="material-icons" onClick={() => {this.onSongDelete(id)}}>
                        delete
                    </i>
                </li>
                
            );
        });
    }
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
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link to="songs/new" className="btn-large btn-floating red right pulse">
                    <i className="material-icons">add</i>
                </Link>
            </div> 
        );
    }
}

const mutation = gql `
    mutation DeleteSong($id : ID){
        deleteSong(id: $id) {
            id
        }
    }
`;


export default graphql(mutation)(graphql(query)(SongList));