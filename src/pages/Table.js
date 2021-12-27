/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Table.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from "react-promise-tracker";
import Spinner from "../components/Spinner";

const Table = () => {
  const [data, setData] = useState([]);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(async () => {
    const getData = async () => {
      const options = {
        url: "https://urlshortdev.herokuapp.com/api/v2/shorturl/userurl",
        method: "GET",
        withCredentials: true,
      };
      return await axios(options);
    };
    const response = await trackPromise(getData());
    setData(response.data.data.url);
  }, []);

  return (
    <>
      {data.length === 0 && <h3>Currently you dont have any shortUrl</h3>}
      {data.length !== 0 &&
        (promiseInProgress === true ? (
          <Spinner />
        ) : (
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
        ))}
    </>
  );
};

export default Table;
