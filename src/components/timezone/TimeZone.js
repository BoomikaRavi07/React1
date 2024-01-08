import React ,{Component} from "react";

class TimeZone extends React.Component{

    constructor(props){
        console.log("constructor")
        super(props)
        this.state = {"sunrise": "", "sunset": ""}
    }
    shouldComponentUpdate(updateProps, updateState){
        console.log("shouldComponentUpdate")
        return true
    }

    render(){
        console.log("render")
        let html = <div>
            <p>Sunrise: {this.state.sunrise} : Sunset: {this.state.sunset}</p>
            <p>Lat: {this.props.lat} : Lng: {this.props.lng}</p>
        </div>;
        return html;
    }

    componentDidMount(){
        console.log("componentDidMount")
        this.setState({"sunrise": "7.20am"});
        this.setState({"sunset": "5.40pm"});
        this.timer = setInterval(function(){

            this.timer=setInterval(()=>{
                this.setState({"sunrise": "6.30am"});
                this.setState({"sunset": "6.30pm"});
            })
        }, 10000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
}
export default TimeZone;