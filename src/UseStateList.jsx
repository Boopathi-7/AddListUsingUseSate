import { useState } from "react";

const UseStateList = () => {
  const [list, setList] = useState([]);
  const [year, setYear] = useState(2024);
  const [model, setModel] = useState("r15");
  const [brand, setBrand] = useState("yamaha");

const AddCar = () => {
  if (year && model && brand) {
    setList([...list, {
      year: year, 
      brand: brand,
      model: model
      }]);
    setBrand(""); // Clear the brand input field
    setModel(""); // Clear the model input field
    setYear(new Date().getFullYear()); // Reset year to current year
  }
}


const removeCar = (index) => {
  setList(list.filter(( _car,i) => i !==index ));
};

const YearChange =(e)=>{
  setYear(e.target.value)
}
const ModelChange =(e)=>{
  setModel(e.target.value)
}
const BrandChange = (e)=>{
  setBrand(e.target.value)
}
  return (
    <div>
        <ul>
           {
            list.map((car,index)=>
            <li key={index} onClick={()=> removeCar(index)}>{car.year} {car.brand} {car.model}</li>)
           }
        </ul>
      <input type="number" placeholder="year"  value={year} onChange={(e)=> {YearChange(e)}}  />
      <input type="text" placeholder="enter brand name" value={brand} onChange={(e)=> {BrandChange(e)}} />
      <input type="text" placeholder="enter model" value={model} onChange={(e)=> {ModelChange(e)}}  />
      <button onClick={AddCar}>Add Car</button>
    </div>
  )
}

export default UseStateList;
