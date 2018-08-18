import React from "react";
import MDSpinner from "react-md-spinner";




export class Loading extends React.Component {
    constructor(props) {
        super(props);

    }

    render = () => {
        var overlay = document.getElementById("overlay");
        window.addEventListener('load', function () {

        })
        return (
            <div>
                <MDSpinner className="spinner2" size={100} color={'#FE9400'} />
                <div id="overlay">
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        );
    };
}
