import * as React from "react";
import { render } from "react-native-testing-library";

import App from "../App";

describe("<App> Component", () => {
  test("I render without errors", () => {
    const { getByText } = render(<App />);
    expect(getByText).toBeDefined();
  });
});
