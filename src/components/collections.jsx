import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./navigation";
import GetPage from "./getPage";
import PostPage from "./postPage";
import PutPage from "./putPage";
import DeletePage from "./deletePage";
import PatchPage from "./patchPage";
import Home from "./home";

export default function Collections() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getPage" element={<GetPage />} />

          <Route path="/postPage" element={<PostPage />} />

          <Route path="/putPage" element={<PutPage />} />

          <Route path="/deletePage" element={<DeletePage />} />

          <Route path="/patchPage" element={<PatchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
