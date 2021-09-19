import React from 'react'
import { useSelector } from 'react-redux'
import store from './store'
import { areInverses, isCommutative, findE, isAssociative, cyclic } from './mathUtil'
import './assets/menu.css'

export default function Menu() {

    const tableIsComplete = useSelector((state) => state.table.value.isComplete)
    let table = store.getState().table.value.elements

    let inverses = false
    let conmutativity = false
    let modulativity = false
    let asociativity = false
    let isCyclic = false
    let generator

    if (tableIsComplete) {
        inverses = areInverses(table)
        conmutativity = isCommutative(table)
        modulativity = findE(table) !== false
        asociativity = isAssociative(table)
        generator = cyclic(table)
        isCyclic = generator !== false
    }

    return (
        <div id="menu">
            <h1>Grupo</h1>
            <h2>Propiedades</h2>
            <p><input checked={asociativity}
                readOnly
                type="radio"></input> Asociatividad</p>
            <p><input checked={modulativity}
                readOnly
                type="radio"></input>Modulatividad</p>
            <p><input checked={inverses}
                readOnly
                type="radio"></input>Inversos</p>
            <h2>Otroas propiedades</h2>
            <p><input checked={isCyclic}
                readOnly
                type="radio"></input>Cíclico {generator}</p>
            <p><input checked={conmutativity}
                readOnly
                type="radio"></input>Abeliano</p>
            <h2>Subgrupos</h2>
        </div>
    )
}
