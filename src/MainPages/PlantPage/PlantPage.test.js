import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import PlantPage from "./PlantPage";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
        <Route path="/:plant_Id" component={PlantPage}/>
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
