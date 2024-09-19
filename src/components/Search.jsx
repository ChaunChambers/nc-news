import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = ({ sort_by, order }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <form action="">
        <label className="input-search" htmlFor="sort_by">
          Filter by search:
        </label>
        <select name="sort_by" id="sort_by">
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label className="input-search" htmlFor="order">
          Choose Ascending or Descending Order:
        </label>
        <select name="order" id="order">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <br />
        <br />
        <input className="input-submit top" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
