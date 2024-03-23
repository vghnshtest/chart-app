import React from "react";

export const Card = ({ title, description, data, ChartComponent }) => {
  const pairs = [];
  for (let i = 0; i < data.length; i += 2) {
    if (i + 1 < data.length) {
      pairs.push([data[i], data[i + 1]]);
    } else {
      pairs.push([data[i]]);
    }
  }
  return (
    <div className="card-wrapper">
      <span className="title">{title}</span>
      <p className="desc">{description} </p>
      <div className="chart">
        <ChartComponent data={data} />
      </div>
      <div className="table-wrapper">
        <table>
          {pairs.map((pair, index) => (
            <tr key={index}>
              {pair.map((item) => (
                <td key={item.id}>
                  <div className="data">
                    <span
                      className="legend"
                      style={{ background: item.color }}
                    />
                    {item.name} <strong>{item.percent}%</strong>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
