import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import { fetchCountries } from "../redux/countries/countriesReducer";

const Countries = () => {
  const { countries } = useSelector((state) => state.countriesR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);
};
