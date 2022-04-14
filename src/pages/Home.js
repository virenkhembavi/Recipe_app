import React from 'react'
import Vegies from '../component/Vegies'
import Popular from '../component/Popular'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Popular />
            <Vegies />
        </motion.div>
    )
}
