import { Component, React } from "react";
import PropTypes from 'prop-types'

class MenuSubItem extends Component{
    constructor(props){
        super()
        this.hasSubMenu = props.hasSubMenu
        this.state = {activo: props.estado}
    }

    expandir(){
        this.setState({activo: true})
    }

    render(){
        if (this.state.activo){
            return(
                <button>{this.props.children}</button>
            )
        }        
    }
}

MenuSubItem.propTypes = {
    children: PropTypes.string,
    hasSubMenu: PropTypes.bool,
    estado: PropTypes.bool
}

export default MenuSubItem