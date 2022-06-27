import React from "react";

const MenuCard = ({ menuData }) => {
  // console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          // destructuring
          const { id, name, category, image, description } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    
                  </div>

                  <img
                    src={curElem.image}
                    alt="images"
                    className="card-media"
                  />

                  <span className="card-tag subtle"><a href={curElem.link}>Get Recipe</a></span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
