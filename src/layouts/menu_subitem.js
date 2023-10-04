import { Component, React } from "react";
import PropTypes from 'prop-types'
import './menu_subitem.css'

class MenuSubItem extends Component{
    constructor(props){
        super()
        this.menu = props.menu
        this.hasSubMenu = props.hasSubMenu
        this.state = {activo: false}
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
                <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="subboto">
                    <button>{title}</button>
                    {this.state.activo && elementsChildren.map((menu, index)=>{
                    return <div key={index} className="submenu"><MenuSubItem menu={menu} elementsSubMenu={elementsSubMenu}></MenuSubItem></div>
                    })}
                </div>
            )   
    }
}

MenuSubItem.propTypes = {
    menu: PropTypes.object,
    children: PropTypes.string,
    hasSubMenu: PropTypes.bool,
    estado: PropTypes.bool,
    elementsSubMenu: PropTypes.array
}

export default MenuSubItem