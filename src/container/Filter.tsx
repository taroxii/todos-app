import React, { useEffect, useState } from 'react'
import ArrowDropdownSVG from '../assets/icons/ArrowDropdownSVG'
import { createUseStyles } from 'react-jss'
const styles = {
    main: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
    },
    text: {
        fontSize: "24px",
        fontWeight: "500",
    },
    dropdownMain: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "110px",
    },
    btn: {
        backgroundColor: '#fff',
        padding: '8px 10px',
        borderRadius: 10,
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        '&:hover': {
            backgroundColor: '#d3d3d3'
        },
        '&:focus': {
            backgroundColor: '#d3d3d3'
        }
    },
    dropdown: {
        position: 'relative',
        display: 'inline-block',
        '& a': {
            '&:hover': {
                backgroundColor: '#ddd'
            }
        }
    },
    dropdownContent: {
        position: 'absolute',
        backgroundColor: '#fff',
        marginTop: '0.5rem',
        padding: '10px 8px 2px',
        borderRadius: 10,
        width: '114px',
        overflow: 'auto',
        boxShadow: '0px 8px 16px 0px #00000033',
        zIndex: 1,
        '& div': {
            color: '#000',
            borderRadius: 8,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            padding: '0px 8px',
            marginBottom: '6px',
            fontSize: '15px',
            '&:hover': {
                backgroundColor: '#585292',
                color: '#fff'
            }
        },

    }
}
export interface FilterTodoType {
    filterTodos: Function
}
const useStyles = createUseStyles(styles)
const Filter = ({ filterTodos }: FilterTodoType) => {
    const [display, setDisplay] = useState<boolean>(false);
    const [value, setValue] = useState<string>("All");
    const classes = useStyles();

    const handleClick = () => {
        setDisplay(!display);
    };

    const handleDropdownClick = (option: string) => {
        setValue(option);
        setDisplay(!display);
    };
    useEffect(() => {
        filterTodos(value)
        return () => { }
    }, [value, filterTodos])
    return (
        <div className={classes.main}>
            <span className={classes.text}>Tasks</span>
            <div className={classes.dropdown}>
                <button
                    onClick={handleClick}
                    className={classes.btn}
                >
                    <div className={classes.dropdownMain}>
                        {value}
                        <ArrowDropdownSVG />
                    </div>
                </button>
                <div
                    className={classes.dropdownContent}
                    style={{ display: display ? "" : "none" }}
                >
                    <div onClick={() => handleDropdownClick("All")}>All</div>
                    <div onClick={() => handleDropdownClick("Done")}>Done</div>
                    <div onClick={() => handleDropdownClick("Undone")}>Undone</div>
                </div>
            </div>
        </div>
    )
}


export default Filter