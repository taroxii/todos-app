import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from 'react-redux'
const styles = {
  main: {
    backgroundColor: "#E07C7C",
    borderRadius: "20px",
    padding: "15px",
    color: "white",
    marginBottom: "1rem",
  },
  progressBar: {
    backgroundColor: "#3B3B3B",
    height: "7.5px",
    borderRadius: "999px",
    marginBottom: "0.5rem",
  },
  progressing: {
    backgroundColor: "white",
    height: "7.5px",
    borderRadius: "999px",
  },
  progressContainer: { fontSize: "25px", marginBottom: "0.5rem" }
}
const useStyles = createUseStyles(styles)
const Progress = () => {
  const todos = useSelector((state: any) => state.todos)
  const classes = useStyles()
  const completedCount = todos.filter((todo: any) => todo.completed === true).length
  const widthPercentage = (100 * completedCount) / todos.length + "%";
  return (
    <div className={classes.main}>
      <div className={classes.progressContainer}>
        <strong>Progress</strong>
      </div>
      <div style={styles.progressBar}>
        <div className={classes.progressing} style={{ width: widthPercentage }}></div>
      </div>
      <div style={{ fontSize: "16px" }}>{completedCount} completed</div>
    </div>
  )
}


export default Progress