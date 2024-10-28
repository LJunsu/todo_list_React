import { Component } from 'react';
import "./Palette.css";

class Palette extends Component {
    render() {
        var color = this.props.color;
        var colors = this.props.colors;
        var colorChange = this.props.colorChange;
        var li_color = [];

        for(var i = 0 ; i < colors.length ; i++) {
            li_color.push(
                <li 
                    key = {i} 
                    style = {{background : colors[i]}}
                    data-color = {colors[i]}
                    className = {colors[i] === color ? "active" : ""}
                    onClick = {(e) => colorChange(e.target.dataset.color)}
                />
            );
        }

        return(
            <div className = "palette-div">
                <ul className = "palette">
                    {li_color}
                </ul>
            </div>
        );
    }
}

export default Palette;