import { Component, React } from "react";
import PropTypes from 'prop-types'
import MenuSubItem from "./MenuSubItem";
import '../styles/MenuItem.css';

class MenuItem extends Component {
    constructor(props) {
        super()
        this.menu = props.menu
        this.id = this.menu.id
        this.elementsSubMenu = props.elementsSubMenu
        this.itemColor = props.itemColor
        this.state = { activo: false, itemColor:props.itemColor}
        this.subitemColor = props.subitemColor
        this.itemActive = props.itemActive
    }

    handleEnter = () => {
        this.setState({itemColor:this.itemActive})
        if (this.menu.isFolder) {
            this.setState({ activo: true})
        }
    }

    handleLeave = () => {
        this.setState({ activo: false, itemColor:this.itemColor})
    }

    render() {
        let title = this.menu.name
        let elementsChildren = this.elementsSubMenu.filter((element) => element.idPadre == this.id)
        let elementsSubMenu = this.elementsSubMenu.filter((element) => element.idPadre != this.id)

        return (
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="botonPrincipal">
                <a className="titulo" style={{backgroundColor: this.state.itemColor}}>{title}{this.menu.isFolder ? " 🡣": ""}</a>
                <ul className="submenu">
                    {this.state.activo && elementsChildren.map((menu, index) => {
                        return <MenuSubItem className='subitems' key={index} menu={menu} elementsSubMenu={elementsSubMenu} itemColor={this.subitemColor} itemActive={this.itemActive}></MenuSubItem>
                    })}
                </ul>
            </li>
        )
    }
}

MenuItem.propTypes = {
    menu: PropTypes.object,
    elementsSubMenu: PropTypes.array,
    itemColor: PropTypes.string,
    subitemColor: PropTypes.string,
    itemActive: PropTypes.string
}

export default MenuItem