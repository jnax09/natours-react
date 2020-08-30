import React from 'react'
import GridLayout from "./grid.styles";

const Grid = ({children}) => {
    return (
        <GridLayout>{children}</GridLayout>
    )
}

export default Grid