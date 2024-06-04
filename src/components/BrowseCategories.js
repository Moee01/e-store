import React from "react";

const browseCategories = () => {
  return (
    <div className="dropdown-menu">
      <ul>
        <li><a href="/products">All Categories</a></li>
        <li>Tablet</li>
        <li>Laptop</li>
        <li>Headphones</li>
        <li>Console</li>
        <li>Others</li>
      </ul>
    </div>
  );
};

export default browseCategories;