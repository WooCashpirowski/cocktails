import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = ({ cocktails, loading }) => {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktails.length) {
    return <h2 className="section-title">no cocktails match the criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
