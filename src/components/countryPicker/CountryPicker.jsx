import React, { useEffect, useState } from "react";
import "./CountryPicker.css";
import { Select } from "antd";
import "../../api";
import { fetchCountries } from "../../api";

export const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const FetchCountryAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    FetchCountryAPI();
  }, [setfetchedCountries]);

  function onChange(value) {
    handleCountryChange(value);
  }
  // console.log(fetchedCountries);

  return (
    <div>
      <div id="components-dropdown-demo-dropdown-button">
        <Select
          className="select"
          showSearch
          style={{}}
          onChange={onChange}
          placeholder="Global"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Select.Option value="">Global</Select.Option>
          {fetchedCountries.map((country, i) => (
            <Select.Option key={i} value={country}>
              {country}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};
