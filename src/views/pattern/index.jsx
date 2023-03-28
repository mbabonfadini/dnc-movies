import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import styles from './index.module.scss'

export default function Pattern() {

    const [searchValue,setSeachValue] = useState("")


    return (
        <>
            <Header onSubmit={inputValue=>setSeachValue(inputValue)}/>
            <section className={styles.teste} >
                <Outlet context={searchValue}/>
            </section>
        </>
    )
}
