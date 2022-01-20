import React, { useEffect } from "react";
import Navbar from '../src/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Mylist from '../src/Navbar/Mylist'
import Home from '../src/Navbar/Home'
import Movies from '../src/Navbar/Movies'
import Recent from '../src/Navbar/Recent'
import Tvshows from '../src/Navbar/Tvshows'
function App() {
  useEffect(() => {
    return (
      <Home />
    )
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        
        <Route exact path='/netflix_clone' element={<Home />} />
        <Route path='/tvshows' element={<Tvshows />} />
        <Route path='/netflix_clone/movies' element={<Movies />} />
        <Route path='/radded' element={<Recent />} />
        <Route path='/mylist' element={<Mylist />} />

      </Routes>
    </>
  );
}

export default App;


//------------------------------


// const Trending_api = [
//     {
//         id: 1,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//         id: 2,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//         id: 3,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//         id: 4,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//         id: 5,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//         id: 6,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
//     {
//         id: 7,
//         imgsrc: "",
//         title: "",
//         link: "https://www.netflix.com/in/title/80057281",
//     },
// ]

// export default Trending_api;