import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

export default function Pages() {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/Cuisine/:type' element={<Cuisine />} />
                <Route path='/Searched/:search' element={<Searched />} />
                <Route path='/Recipe/:name' element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}
