import React, {Component} from "react";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {name: "Hello world"}
        console.log("constructor")
    }
    componentDidMount = ()=> {
        console.log("componentDidMount")
        this.timer=setInterval(()=>{
            console.log("hello all")
            this.setState({name:"hello"})
        },10000)
    }

    componentWillUnmount =() =>{
        console.log("componentWillUnmount")
        clearInterval(this.timer);
    }

    shouldComponentUpdate =() =>{
        console.log("shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate =() =>{
        console.log("getSnapshotBeforeUpdate")
    }

    componentDidCatch =() =>{
        console.log("componentDidCatch")
    }
    render(){
        console.log("render")
        let html;
        let name="hello world"
        function add(a,b){
         return a+b;
        }
        function sub(a,b){
            return a-b;
           }
           function mul(a,b){
            return a*b;
           }
           function divi(a,b){
            return a/b;
           }<p>{this.props.token}</p>
        html =(
            <div>
                <p>Java</p>
                <ul>
                    <li>3+4={add(3,4)}</li>
                    <li>5-2={sub(5,2)}</li>
                    <li>5*2={mul(5,2)}</li>
                    <li>5/2={divi(5,2)}</li>
                    <li>Name:{name}</li>
                    <li>Global Name:{this.state.name}</li>
                    <li>First Name:{this.props.first_name}</li>
                    <li>First Name:{this.props.age}</li>
                    {this.props?.data?.map((skill) =>(
                        <li>skill: {skill.skill} rating: {skill.rating}</li>
                    ))}
                </ul>
            </div>
        );
        return html;
    }
    
}

export default Menu;