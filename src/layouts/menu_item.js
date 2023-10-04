import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuSubItem from "./menu_subitem";
import './menu_item.css'

class MenuItem extends Component {
    constructor(props) {
        super()
        this.state = { activo: false }
        this.menu = props.menu
        this.id = this.menu.id
        this.elementsSubMenu = props.elementsSubMenu
    }

    handleEnter = () => {
        if (this.menu.isFolder) {
            this.setState({ activo: true })
        }
    }

    handleLeave = () => {
        this.setState({ activo: false })
    }

    render() {
        let title = this.menu.name
        let elementsChildren = this.elementsSubMenu.filter((element) => element.idPadre == this.id)
        let elementsSubMenu = this.elementsSubMenu.filter((element) => element.idPadre != this.id)

        return (
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="botonPrincipal">
                <a className="titulo">{title}</a>
                <ul className="submenu">
                    {this.state.activo && elementsChildren.map((menu, index) => {
                        return <MenuSubItem className='subitems' key={index} menu={menu} elementsSubMenu={elementsSubMenu}></MenuSubItem>
                    })}
                </ul>
            </li>
        )
    }
}

MenuItem.propTypes = {
    menu: PropTypes.object,
    elementsSubMenu: PropTypes.array
}

export default MenuItem