import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
