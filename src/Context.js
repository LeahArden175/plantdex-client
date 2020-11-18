import React from 'react'

export default React.createContext({
    plantInfo: [],
    loggedIn: [],
    deletePlant: () => {},
    addPlant: () => {},
    editPlant: () => {},
    fetchPlant: () => {},
    setPlant: () => {},
    handleLoggedIn: () => {}
})