import React from "react";
import { Route, Routes } from "react-router";
import LayoutWithHeader from "../components/LayoutWithHeader";
import RecipesList from "../pages/RecipesList";
import AddRecipe from "../pages/AddRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import RecipeCounter from "../pages/RecipeCounter";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

export default function RoutesList() {
  return (
    <Routes>
      <Route element={<LayoutWithHeader />}>
        <Route path="/" element={<RecipesList />} />
        <Route path="/add.recipe" element={<AddRecipe />} />
        <Route path="/recipe.details/:id" element={<RecipeDetails />} />
        <Route path="/recipe.counter" element={<RecipeCounter />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
