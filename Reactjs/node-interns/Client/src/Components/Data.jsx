import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchInterns() {
      const fetchResult = await fetch("/api");
      const internsData = await fetchResult.json();
      setData(internsData);
    }
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl">CyberDdude Interns</h2>
      {data.length === 0 ? (
        <div className="bg-white p-5 rounded">No quotes data available!</div>
      ) : (
        ""
      )}

      {data.map((data) => (
        <div className="w-[280px] " key={data.id}>
          <img src={data.img} alt="" className="w-11 h-11" />
          <h2 className="text-center">{data.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Data;
