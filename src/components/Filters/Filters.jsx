import {
  faChevronDown,
  faFilter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useDispatch } from "react-redux";
import Select from "react-select";
import properties from "../../data/properties";
import { setProperties } from "../../store/propertySlice";
import {
  filterByDate,
  filterByLocation,
  filterByPrice,
  filterByType,
} from "../../utils/filters";
import {
  customStyles,
  locationOptions,
  priceOptions,
  propTypeOptions,
} from "../../utils/selecOptions";
import "./Filters.scss";

const FiltersHeader = () => (
  <div className="header-container">
    <h2 className="header-text">Search properties to rent</h2>
    <div className="search-bar-option">
      <p>Search with Search bar</p>
      <div className="icon-box">
        <FontAwesomeIcon icon={faChevronDown} className="icon-dropdown" />
      </div>
    </div>
  </div>
);

const Filters = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);
  const [date, setDate] = useState("");
  const [propType, setPropType] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [unFilteredData, setUnFilteredData] = useState(properties);
  const [isFiltered, setIsFiltered] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let result = unFilteredData;
    result = filterByPrice(result, price);
    result = filterByType(result, propType);
    if (date) {
      result = filterByDate(result, date);
    }

    result = filterByLocation(result, location);
    setFilteredData(result);
  }, [location, price, date, propType, dispatch, unFilteredData]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!price && !date && !location && !propType) return;
    setIsFiltered(true);

    dispatch(setProperties(filteredData));
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch(setProperties(unFilteredData));
    setIsFiltered(false);
    setLocation("");
    setDate("");
    setPrice(null);
    setPropType(null);
  };

  const handleDateSelect = (date) => {
    let formattedDate = format(date, "dd-MM-yyyy");
    setDate(formattedDate);
    setShowCalendar(false);
  };

  return (
    <section className="filters">
      <FiltersHeader />
      <div className="filter-container">
        <div className="filter-location">
          <label className="input-label">Location</label>
          <Select
            value={location}
            placeholder={"City"}
            onChange={setLocation}
            options={locationOptions}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                text: "black",

                primary: "#5359bd",
                primary50: "#5359bd",
              },
            })}
          />
        </div>
        <div className="filter-date">
          <label className="input-label">When</label>
          <div className="calendar">
            <input
              onClick={() => setShowCalendar((prev) => !prev)}
              type="text"
              value={date}
              readOnly
              className="dateinputBox"
              placeholder="Select Move In Date"
            />
          </div>
          {showCalendar && (
            <Calendar
              date={new Date()}
              onChange={handleDateSelect}
              className="calendarElement"
            />
          )}
        </div>
        <div className="filter-price">
          <label className="input-label">Price</label>

          <Select
            value={price}
            onChange={setPrice}
            options={priceOptions}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                text: "black",

                primary: "#5359bd",
                primary50: "#5359bd",
              },
            })}
          />
        </div>
        <div className="filter-prop-type">
          <label className="input-label">Property Type</label>
          <Select
            value={propType}
            onChange={setPropType}
            options={propTypeOptions}
            styles={customStyles}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                text: "black",

                primary: "#5359bd",
                primary50: "#5359bd",
              },
            })}
          />
        </div>
        <button className="btn btn-search" onClick={handleSearch}>
          <FontAwesomeIcon icon={faFilter} />
          <span>Filter</span>
        </button>
        {isFiltered && (
          <button className="btn btn-clear" onClick={handleReset}>
            <FontAwesomeIcon icon={faXmark} />
            <span>Clear</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Filters;
