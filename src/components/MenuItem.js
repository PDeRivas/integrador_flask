import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuSubItem from "./MenuSubItem";
import '../styles/MenuItem.css';

class MenuItem extends Component {
    constructor(props) {
        super()
        this.menu = props.menu
        this.id = this.menu.id
        this.itemColor = props.itemColor
        this.subitemColor = props.subitemColor
        this.elementsSubMenu = props.elementsSubMenu
        this.state = { activo: false, itemColor: props.itemColor }
        this.itemActive = props.itemActive
    }

    handleEnter = () => {
        this.setState({ itemColor: this.itemActive })
        if (this.menu.isFolder) {
            this.setState({ activo: true })
        }
    }

    handleLeave = () => {
        this.setState({ activo: false, itemColor: this.itemColor })
    }


    render() {
        let title = this.menu.name
        // Listado con todos los elementos que saldran a partir del MenuItem
        let elementsChildren = this.elementsSubMenu.filter((element) => element.idPadre == this.id)
        // Listado con todos los elementos que pueden salir a partir de un MenuSubItem
        let elementsSubMenu = this.elementsSubMenu.filter((element) => element.idPadre != this.id)

        return (
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} onClick={this.handleLeave} className="primaryBtn">
                <a className="menuName" style={{ backgroundColor: this.state.itemColor }}>{title}{this.menu.isFolder ? " 🡣" : ""}</a>
                <ul className="subMenu">
                    {this.state.activo && elementsChildren.map((menu, index) => {
                        return <MenuSubItem key={index} menu={menu} elementsSubMenu={elementsSubMenu} itemColor={this.subitemColor} itemActive={this.itemActive} />
                    })}
                </ul>
            </li>
        )
    }
}

MenuItem.propTypes = {
    menu: PropTypes.object,
    itemColor: PropTypes.string,
    subitemColor: PropTypes.string,
    elementsSubMenu: PropTypes.array,
    itemActive: PropTypes.string
}

export default MenuItem