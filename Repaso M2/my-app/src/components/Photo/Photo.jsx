import React from "react";

export const divItem = {

};

export default class Photo extends React.Component {
    render() {
        return (
            <div >
                <img src={this.props.url} alt='' />
                <h2>{this.props.id}</h2>
                <p>{this.props.title}</p>
            </div>
        )
    }
}