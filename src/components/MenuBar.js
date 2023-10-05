import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import '../styles/MenuBar.css'

class MenuBar extends Component {
    constructor(props) {
        super()
        let config = props.config
        this.configColor = config.configColor
        this.id = config.id
        this.menuItems = config.menuItems
    }

    render() {
        // Elementos que van en el MenuBar
        let elementsMenu = this.menuItems.filter((element) => element.idPadre == this.id)
        // Elementos que se despliegan de otro MenuItem
        let elementsSubMenu = this.menuItems.filter((element) => element.idPadre != this.id)

        return (
            <ul className="menu" style={{ backgroundColor: this.configColor.background }}>
                {elementsMenu.map((menu, index) => {
                    return <MenuItem key={index} menu={menu} elementsSubMenu={elementsSubMenu} itemColor={this.configColor.itemColor} background={this.configColor.background} subitemColor={this.configColor.itemBackground} itemActive={this.configColor.itemActive} />
                })}
            </ul>
        )
    }
}

MenuBar.propTypes = {
    config: PropTypes.object
}

export default MenuBar