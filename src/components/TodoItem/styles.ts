export default {
    container: {
        position: "relative",
        padding: "0 0 0 35px",
        fontSize: "22px",
        userSelect: "none",
        "& input": {
            height: 0,
            width: 0,
            opacity: 0,
            cursor: 'pointer',
        },

        "& input:checked": {
            backgroundColor: '#585292'
        },

    },
    checked: {
        backgroundColor: '#585292',
        '&:hover': {
            backgroundColor: '#585292'
        },
        '&:after': {
            left: 7,
            top: 3,
            height: 10,
            border: 'solid #fff',
            borderWidth: ' 0 3px 3px 0',
            width: 5,
            transform: 'rotate(45deg)',
            display: 'block',
            content: '""',
            position: 'absolute',
        }
    },
    typographyChecked:{
        textDecoration:'line-through',
        color:"#A9A9A9"
    },
    completed: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 22,
        width: 22,
        border: "2px solid #585292",
        borderRadius: 6,
    },
    main: {
        backgroundColor: "#FFFFFF",
        borderRadius: "9999px",
        padding: "10px",
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
    },
    input: {
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "17px",
    },
    saveButton: {
        width: "64px",
        height: "36px",
        backgroundColor: "#585292",
        border: "none",
        outline: "none",
        borderRadius: "99px",
        color: "white",
        marginLeft: "auto",
    },
    dropdown: {
        position: 'relative',
        display: 'inline-block'
    },
    dropdownContent: {
        position: 'absolute',
        backgroundColor: '#fff',
        margin: '0.5rem 0 0 0',
        padding: '10px 8px 2px',
        borderRadius: '10px',
        width: 114,
        overflow: 'auto',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1,
        '& div': {
            borderRadius: 8,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            marginBottom: '6px',
            fontSize: 15,
            '&:hover': {
                backgroundColor: '#585292',
                color: '#fff'
            },
            '&a:hover': {
                'background': '#dddd'
            }
        }
    }


} as any