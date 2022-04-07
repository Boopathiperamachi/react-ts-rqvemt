import React, { useState } from 'react';
interface Props {
  name: any;
}
const Display: React.FC<{}> = (props: Props) => {
  return <h1>You Selected {props.name}</h1>;
};
export default Display;
