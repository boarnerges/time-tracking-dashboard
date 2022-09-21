"use strict";

const fetchData = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();
  console.log(data);
};

// fetch("/data.json");
// .then((res) =>
//     res.json())
// .then((data)=>
// console.log(data))
