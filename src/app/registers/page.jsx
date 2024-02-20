import RegisterTable from "app/components/RegisterTable";
import LayoutFrontal from "app/layout/LayoutFrontal";
import React from "react";

const Registers = () => {
  return (
    <>
      <LayoutFrontal>
        <div>Registers</div>
        <RegisterTable />
      </LayoutFrontal>
    </>
  );
};

export default Registers;
