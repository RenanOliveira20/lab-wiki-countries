import React, { useEffect, useState } from "react";
import DB from "../countries.json";
const CountriesDetails = (props) => {
  const { cca3 } = props.match.params;
  const [selectedCountry, handCountry] = useState({});
  const [selectedCountryBorders, handCountryBorders] = useState ([])
  const getCountry = () => {
    const search = DB.filter((e) => e.cca3 === cca3);
    return handCountry({ ...selectedCountry, ...search });
  };
  const pushCountryBorders = () =>{
      const array = []
      handCountryBorders([...selectedCountryBorders, [...array]])
        const findCountryAndPush = selectedCountry[0].borders.map((e) => {
            const search = DB.filter(c => c.cca3 === e )
            array.push(search)
            return handCountryBorders([...selectedCountryBorders, [...array]])
            
})
}
  useEffect(() => {
    getCountry()
    pushCountryBorders()  
}
    , []);
  return (
    <div>
      <h1>
        {selectedCountry[0] && selectedCountry[0].cca3 === cca3
          ? selectedCountry[0] &&
            selectedCountry[0].name &&
            selectedCountry[0].name.official
          : getCountry()}
      </h1>
      <div>
        <p>Capital</p>
        <p>{selectedCountry[0] && selectedCountry[0].capital}</p>
      </div>
      <div>
        <p>Area</p>
        <p>
          {selectedCountry[0] && selectedCountry[0].area}M<sup>2</sup>{" "}
        </p>
      </div>
      <div>
        <p>Borders</p>
        <ul>
            {
}
        </ul>
      </div>
    </div>
  );
};
export default CountriesDetails;
