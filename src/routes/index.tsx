import { Routes, Route } from "react-router-dom"
import { PageHome, PageMile, PageLayout, PageAbout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="list" element={<PageMile />} />
        <Route path="about" element={<PageAbout />} />
      </Route>
    </Routes>
  )
}