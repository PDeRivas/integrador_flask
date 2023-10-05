import React from 'react'
import PropTypes from 'prop-types'
import '../styles/DrawClass.css'

export default function DrawClass ({ data }) {
  const { name, attributes, methods, borderColor, headColor, textColor } = data

  function getEntireList () {
    const listAttributesAndMethods = []
    try {
      for (let i = 0; i < attributes.length; i++) {
        listAttributesAndMethods.push(attributes[i])
      }
      for (let i = 0; i < methods.length; i++) {
        listAttributesAndMethods.push(methods[i])
      }
      return listAttributesAndMethods
    } catch {
      console.log('error')
    }
  }

  function calcMaxWidth () {
    let elementMaxWidth = listAttributesAndMethods[0] // suponemos que el primer elemento de la lista es el que tiene mas caracteres
    try {
      for (let i = 1; i < listAttributesAndMethods.length; i++) {
        if (listAttributesAndMethods[i].length > elementMaxWidth.length) {
          elementMaxWidth = listAttributesAndMethods[i]
        }
      }
      return elementMaxWidth.length
    } catch {
      return 20
    }
  }

  const listAttributesAndMethods = getEntireList()
  const maxWidth = calcMaxWidth() * 10
  let attributeHeigth
  if (attributes.length !== 0) {
    attributeHeigth = attributes.length * 20 + 70
  } else {
    attributeHeigth = 80
  }
  let methodHeigth
  if (methods.length !== 0) {
    methodHeigth = methods.length * 35 + attributeHeigth
  } else {
    methodHeigth = 35 + attributeHeigth
  }
  return (

    <svg width={maxWidth} height={methodHeigth} className="drawClass" >
      <rect width={maxWidth} height="35" fill={headColor} strokeWidth="2" stroke={borderColor} />
      <text x="20" y="23" fill={textColor}>{name}</text>
      <rect width={maxWidth} height={methodHeigth} fill="transparent" strokeWidth="2" stroke={borderColor} />
      {attributes.map((attributes, index) => <text x="10" y={index * 20 + 60} fill={textColor} key={index}>{attributes}</text>)}
      <line x1="0" y1={attributeHeigth} x2={maxWidth} y2={attributeHeigth} stroke={borderColor} strokeWidth="1.5" />
      {methods.map((methods, index) => <text x="10" y={attributeHeigth + (index + 1) * 20} fill={textColor} key={index}>{methods}</text>)}
    </svg>
  )
}

DrawClass.propTypes = {
  data: PropTypes.object
}
