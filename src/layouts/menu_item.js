import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuSubItem from "./menu_subitem";

class MenuItem extends Component{
    constructor(props){
        super()
        this.state = {activo: false}
        this.menu = props.menu
    }

    handleEnter = ()=>{
        this.setState({activo: true})
        if(this.menu.isFolder){
            console.log('HandleClick Hovereado')
        }
    }

    render(){
        let title = this.menu.name
        return(
            <>
            <button onMouseEnter={this.handleEnter}>{title}</button>
            <MenuSubItem estado={this.state.activo}></MenuSubItem>
            </>
        )
    }
}

MenuItem.propTypes = {
    menu: PropTypes.object
}

export default MenuItem