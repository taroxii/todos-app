import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import styled from './styles'
const useStyles = createUseStyles(styled)
function Container({ children }: any) {
    const classes = useStyles();
    return (
        <div className={classes.root}>{children}</div>
    )
}

// Container.propTypes = {
//     children: PropTypes.element
// }

export default Container
