import Details from "./Details";
const Card1 = (props) => {
  return (
    <div>
      <h1>Persons Information</h1>
      <Details
        data={props.data}
        updateName={props.updateName}
        setData={props.setData}
      />
    </div>
  );
};
export default Card1;
