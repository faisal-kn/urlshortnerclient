/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const options = {
      url: "https://urlshortdev.herokuapp.com/api/v2/shorturl/userurl",
      method: "GET",
      withCredentials: true,
    };
    const response = await axios(options);
    setData(response.data.data.url);
  }, []);
  console.log(data);
  return (
    <>
      {!data && <h3>Currently you dont have any shortUrl</h3>}
      {data && (
        <div style={{ overflow: "auto" }}>
          <table>
            <caption>ALL YOURS SHORT URLS</caption>
            <tr>
              <th>FULL URL</th>
              <th>SHORT URL</th>
              <th>CLICKS</th>
            </tr>{" "}
            {data.map((item, ind) => {
              return (
                <tr key={ind}>
                  <td>{item.fullUrl}</td>
                  <td>
                    {" "}
                    <NavLink to={`${item.shortUrl}`}>
                      {`http://localhost:3000/${item.shortUrl}`}
                    </NavLink>
                  </td>
                  <td>{item.clicks}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
};

export default Table;
