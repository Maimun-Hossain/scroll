

const Card = ({item}) => {
    const {title, body, id} = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
  <p>{id}</p>
    <h2 className="card-title">{title}</h2>
    <p>{body}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;