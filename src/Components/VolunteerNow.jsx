/* eslint-disable react/prop-types */


const VolunteerNow = ({vn}) => {
    // console.log(vn)
    // eslint-disable-next-line no-unused-vars
    const {img,deadline,title, category,}=vn
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <h2 className="card-title">{deadline}</h2>

    <p className="uppercase font-serif">{category}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default VolunteerNow;