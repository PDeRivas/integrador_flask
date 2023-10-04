import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuSubItem from "./menu_subitem";
import './menu_item.css'

class MenuItem extends Component{
    constructor(props){
        super()
        this.state = {activo: false}
        this.menu = props.menu
        this.id = this.menu.id
        this.elementsSubMenu = props.elementsSubMenu
    }

    handleEnter = ()=>{
        if(this.menu.isFolder){
            this.setState({activo: true})
        }
    }

    handleLeave = () =>{
        this.setState({activo: false})
    }

    render(){
        let title = this.menu.name
        let elementsChildren = this.elementsSubMenu.filter((element)=>element.idPadre==this.id)
        let elementsSubMenu = this.elementsSubMenu.filter((element) => element.idPadre!=this.id)
        
        return(
            <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="botonPrincipal">
                <button className="boton">{title}</button>
                {this.state.activo && elementsChildren.map((menu, index)=>{
                    return <div className="menu_boton" key={index}><MenuSubItem menu={menu} elementsSubMenu={elementsSubMenu}></MenuSubItem></div>
                })}
                
            </div>
        )
    }
}

MenuItem.propTypes = {
    menu: PropTypes.object,
    elementsSubMenu: PropTypes.array
}

export default MenuItem