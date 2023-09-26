const List = ({ id, name, age, image }) => {
    return (
      <article className="d-flex py-3 align-items-center">
        <img src={image} className="img-fluid img-style-1" alt={name} />
        <div className="ms-3">
          <div>
            <h4>{name}</h4>
          </div>
          <div>
            <p>{age} years</p>
          </div>
        </div>
      </article>
    );
  };
  
  export default List;
  