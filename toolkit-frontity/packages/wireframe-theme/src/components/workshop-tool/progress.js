import { connect, styled } from "frontity";
import React from "react";

class WorkshopProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div className="ProgressBarContainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="500" height="100" viewBox="0 0 500 100">
                    <line id="Linie_1-2" data-name="Linie 1-2" x1="50" y1="50" x2="150" y2="50" stroke="#197eb7" strokeWidth="6"/>
                    <line id="Linie_2-3" data-name="Linie 2-3" x1="150" y1="50" x2="250" y2="50" stroke="#197eb7" strokeWidth="6"/>
                    <line id="Linie_3-4" data-name="Linie 3-4" x1="250" y1="50" x2="350" y2="50" stroke="#197eb7" strokeWidth="6"/>
                    <line id="Linie_4-5" data-name="Linie 4-5" x1="350" y1="50" x2="450" y2="50" stroke="#197eb7" strokeWidth="6"/>
                    <circle id="circle_1" data-name="circle_1" cx="50" cy="50" r="15" fill= "#197eb7"/>
                    <circle id="circle_1" data-name="circle_1" cx="150" cy="50" r="15" fill="#197eb7"/>
                    <circle id="circle_1" data-name="circle_1" cx="250" cy="50" r="15" fill="#197eb7"/>
                    <circle id="circle_1" data-name="circle_1" cx="350" cy="50" r="15" fill="#197eb7"/>
                    <circle id="circle_1" data-name="circle_1" cx="450" cy="50" r="15" fill="#197eb7"/>
                </svg>
            </div>
        )
    }
}
export default connect(WorkshopProgressBar);