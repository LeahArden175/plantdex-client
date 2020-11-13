import React from 'react'

export default React.createContext({
    plantInfo: [],
    deletePlant: () => {},
    addPlant: () => {},
    editPlant: () => {},
    fetchPlant: () => {},
    setPlant: () => {}
})