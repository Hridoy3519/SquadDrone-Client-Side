import React from "react";

const Admins = (props) => {
    const {number,admin} = props;
    const {displayName,email} = admin;
  return (
    <tr>
      <td>{number}</td>
      <td>{displayName}</td>
      <td>{email}</td>
    </tr>
  );
};

export default Admins;
