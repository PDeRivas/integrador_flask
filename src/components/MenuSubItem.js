import { Component, React } from "react";
import PropTypes from 'prop-types'
import '../styles/MenuSubItem.css';

class MenuSubItem extends Component {
    constructor(props) {
        super()
        this.menu = props.menu
        this.id = this.menu.id
        this.elementsSubMenu = props.elementsSubMenu
        this.itemColor = props.itemColor
        this.state = { activo: false, itemColor: this.itemColor }
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
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="subBtn">
                <a className="subMenuName" style={{ backgroundColor: this.state.itemColor }}>{title} {this.menu.isFolder ? this.state.activo ? "🡣" : "🡢" : ""}</a>
                <ul className="subMenuRight">
                    {this.state.activo && elementsChildren.map((menu, index) => {
                        return <MenuSubItem key={index} menu={menu} elementsSubMenu={elementsSubMenu} itemColor={this.itemColor} itemActive={this.itemActive} />
                    })}
                </ul>
            </li>
        )
    }
}

MenuSubItem.propTypes = {
    menu: PropTypes.object,
    elementsSubMenu: PropTypes.array,
    itemColor: PropTypes.string,
    itemActive: PropTypes.string
}

export default MenuSubItem