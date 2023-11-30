import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdverts } from "../../redux/selectors";
import { requestAdverts } from "../../redux/operations";

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(getAdverts);

  useEffect(() => {
    dispatch(requestAdverts());
  }, [dispatch]);

  return <div>Catalog</div>;
};

export default Catalog;
