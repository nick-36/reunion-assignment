import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allProperties from "../../data/properties";
import { setIsEmpty, setProperties } from "../../store/propertySlice";
import Card from "../Card/Card";
import { Filters } from "../index";
import "./PropertyList.scss";

const EmptyState = () => <div className="empty state">No Result Found</div>;

const ListItem = ({ data, isEmpty }) => {
  return (
    <div className="list-items">
      {isEmpty ? (
        <EmptyState />
      ) : (
        <>
          {data?.map((item, i) => {
            return <Card key={i} property={item} />;
          })}
        </>
      )}
    </div>
  );
};

const PropertyList = () => {
  const dispatch = useDispatch();
  const { properties, isEmpty } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setProperties(allProperties));
  }, []);

  useEffect(() => {
    if (properties.length === 0) {
      dispatch(setIsEmpty(true));
    } else {
      dispatch(setIsEmpty(false));
    }
  }, [properties, dispatch]);

  return (
    <section className="section-property-list">
      <Filters />
      <ListItem data={properties} isEmpty={isEmpty} />
    </section>
  );
};

export default PropertyList;
