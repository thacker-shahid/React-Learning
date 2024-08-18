// API key: d5423cd8fef34c6b88f5714d133c76ca
// Email: yefawe1333@chaladas.com
import Navbar from './Components/Navbar'
import News from './Components/News'
import React, { Component } from 'react'

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Route,
  Link,
  BrowserRouter,
  Routes,  
  createRoutesFromElements
} from "react-router-dom";

export default class App extends Component {

  

  render() {


    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<Navbar />}  >
            <Route  index element={<News key='general' category="general" pageSize={5} country="us" />}/>
            <Route  path='business' element={<News key='business' category="business" pageSize={5} country="us" />}/>
            <Route key ="entertainment" path="/entertainment" element={<News  key='entertainment' category="entertainment" pageSize={5} country="us" />} />
            <Route key ="health" path="/health" element={<News  key='health' category="health" pageSize={5} country="us" />} />
            <Route key ="science" path="/science" element={<News  key='science' category="science" pageSize={5} country="us" />} />
            <Route key ="sports" path="/sports" element={<News  key='sports' category="sports" pageSize={5} country="us" />} />
            <Route key ="technology" path="/technology" element={<News  key='technology' category="technology" pageSize={5} country="us" />} />
          </Route>
        )
    );
    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: (
    //       <div>
    //         <News category="general" pageSize={5} country="us" />
    //       </div>
    //     ),
    //   },
    //   {
    //     path: "business",
    //     element: (<div>
    //       <News category="business" pageSize={5} country="us" />
    //     </div>),
    //   },
    // ]);


    return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News key ="general" category="general" pageSize={2} country="in" />} />
        <Route exact path="/business" element={<News key ="business" category="business" pageSize={2} country="in" />} />
        <Route exact path="/entertainment" element={<News key ="entertainment" category="entertainment" pageSize={2} country="in" />} />
        <Route exact path="/health" element={<News key ="health" category="health" pageSize={2} country="in" />} />
        <Route exact path="/science" element={<News  key ="science" category="science" pageSize={2} country="in" />} />
        <Route exact path="/sports" element={<News key ="sports" category="sports" pageSize={2} country="in" />} />
        <Route exact path="/technology" element={<News key ="technology" category="technology" pageSize={2} country="in" />} />
      </Routes>
    </BrowserRouter>
        // <RouterProvider router={router} />
    )
  }
}