import React from "react";
import { MainButton } from "../buttons/MainButton.Component";
import Ash from "../../assets/ash.png";
import header from "../../assets/header.png";
import { FifthButton } from "../buttons/FifthButton.Component";


export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render = () => {
        return (
            <div className="homePage">
                <img alt="Header" className="header_img" src={header}></img>
                <br />
                <img alt="Ash" className="img_home" src={Ash}></img>
                <br />
                <MainButton className="home_btn" url="/pokemon-overview" name="Lets Go!" />
                <FifthButton url="/loading" name="Loading Animations" />
            </div>
        );
    };
}
