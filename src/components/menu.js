import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuItem from '../layouts/menu_item'

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
        return(
            <>
                {elementsMenu.map((menu, index)=> {
                    return <MenuItem key={index} menu={menu}></MenuItem>
                })}
            </>
        )
    }
}

MenuBar.propTypes = {
    config: PropTypes.object
}

export default MenuBar