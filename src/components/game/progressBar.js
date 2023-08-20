const ProgressBar = (props) => {

    const containerStyles = {
      height: 10,
      width: "200px",
      backgroundColor: "#e0e0de",
      borderRadius: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${props.completed}%`,
      borderRadius: 'inherit',
      backgroundColor: "#0000FF"
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles} className="progressFill">
        </div>
      </div>
    );
  };
  
  export default ProgressBar;