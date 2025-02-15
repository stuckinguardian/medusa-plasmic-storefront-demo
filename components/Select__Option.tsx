import * as React from "react";
import {
  PlasmicSelect__Option,
  DefaultSelect__OptionProps
} from "./plasmic/copy_of_medusa_js_plasmic_demo_store/PlasmicSelect__Option";

import { SelectOptionRef } from "@plasmicapp/react-web";

export interface Select__OptionProps extends DefaultSelect__OptionProps {
  // Feel free to add any additional props that this component should receive
}
function Select__Option_(props: Select__OptionProps, ref: SelectOptionRef) {
  const { plasmicProps } = PlasmicSelect__Option.useBehavior(props, ref);
  return <PlasmicSelect__Option {...plasmicProps} />;
}

const Select__Option = React.forwardRef(Select__Option_);

export default Object.assign(
  Select__Option,

  {
    __plumeType: "select-option"
  }
);
