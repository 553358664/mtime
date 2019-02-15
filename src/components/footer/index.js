import React,{Component} from "react"
import {NavLink} from "react-router-dom"
import "./footer.css"
export default class Buy extends Component{
    render(){
        return (
            <div id="footer">
                <ul>
                <li>
                    <NavLink to="/home">
                        <i className="iconfont">&#xe717;</i>
                        <span>首页</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/buy">
                        <i className="iconfont">&#xe61d;</i>
                        <span>购票</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mall">
                        <i className="iconfont">&#xe605;</i>
                        <span>商城</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/find">
                        <i className="iconfont">&#xe605;</i>
                        <span>发现</span>
                    </NavLink>
                </li>
                </ul>
            </div>         
        )
    }
}