import "./styles.css";
const ToogleSwitch = ({ onClick }) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={onClick} />
        <span className="slider round" data-value="fr"></span>
      </label>
    </>
  );
};

export default ToogleSwitch;
