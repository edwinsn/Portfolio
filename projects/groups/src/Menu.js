import React from 'react'
import { useSelector } from 'react-redux'
import store from './store'
import { areInverses, isCommutative, findE } from './mathUtil'
import './assets/menu.css'

export default function Menu() {

    const tableIsComplete = useSelector((state) => state.table.value.isComplete)
    let table = store.getState().table.value.elements
    if (tableIsComplete) {
        console.log(areInverses(table))
        console.log(isCommutative(table))
        console.log(findE(table))
    }

    return (
        <div id="menu">
            <h1>Grupo</h1>
            <h2>Propiedades</h2>
            <p><input checked={isCommutative(table)} type="radio"></input> Asociatividad</p>
            <p><input checked={findE(table)} type="radio"></input>Modulatividad</p>
            <p><input checked={areInverses(table)} type="radio"></input>Inversos</p>
            <h2>Otroas propiedades</h2>
            <p><input checked={isCommutative(table)} type="radio"></input>Cíclico</p>
            <p><input checked={isCommutative(table)} type="radio"></input>Abeliano</p>
            <h2>Subgrupos</h2>
        </div>
    )
}
