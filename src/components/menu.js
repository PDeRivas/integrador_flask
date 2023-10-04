import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuItem from '../layouts/menu_item'
import './menu.css';

class MenuBar extends Component{
    constructor(props){
        super()
        let config = props.config
        this.configColor = config.configColor
        this.id = config.id
        this.menuItems = config.menuItems
    }
    
    render(){
        let elementsMenu = this.menuItems.filter((element) => element.idPadre==this.id)
        let elementsSubMenu = this.menuItems.filter((element) => element.idPadre!=this.id)
        return(
            <ul className="menu">
                {elementsMenu.map((menu, index)=> {
                    return <MenuItem menu={menu} elementsSubMenu={elementsSubMenu} key={index}></MenuItem>
                })}
            </ul>
        )
    }
}

MenuBar.propTypes = {
    config: PropTypes.object
}

export default MenuBar