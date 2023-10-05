import { Component, React } from "react";
import PropTypes from 'prop-types'
import '../styles/MenuSubItem.css';

class MenuSubItem extends Component {
    constructor(props) {
        super()
        this.menu = props.menu
        this.hasSubMenu = props.hasSubMenu
        this.id = this.menu.id
        this.elementsSubMenu = props.elementsSubMenu
        this.itemColor = props.itemColor
        this.state = { activo: false, itemColor:this.itemColor }
        this.itemActive = props.itemActive
    }

    handleEnter = () => {
        this.setState({itemColor:this.itemActive})
        if (this.menu.isFolder) {
            this.setState({ activo: true })
        }
    }

    handleLeave = () => {
        this.setState({ activo: false, itemColor:this.itemColor })
    }

    render() {
        let title = this.menu.name
        let elementsChildren = this.elementsSubMenu.filter((element) => element.idPadre == this.id)
        let elementsSubMenu = this.elementsSubMenu.filter((element) => element.idPadre != this.id)

        return (
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} className="subBtn">
                <a className="menuBar" style={{backgroundColor:this.state.itemColor}}>{title} {this.menu.isFolder ? this.state.activo ?  "🡣": "🡢": ""}</a>
                <ul className={"subMenuRight"}>
                    {this.state.activo && elementsChildren.map((menu, index) => {
                        return <MenuSubItem  key={index} menu={menu} elementsSubMenu={elementsSubMenu} isFirstSubMenu={false} itemColor={this.itemColor} itemActive={this.itemActive} />
                    })}
                </ul>
            </li>
        )
    }
}

MenuSubItem.propTypes = {
    menu: PropTypes.object,
    children: PropTypes.string,
    hasSubMenu: PropTypes.bool,
    estado: PropTypes.bool,
    elementsSubMenu: PropTypes.array,
    isFirstSubMenu: PropTypes.bool,
    itemColor: PropTypes.string,
    itemActive: PropTypes.string
}

export default MenuSubItem