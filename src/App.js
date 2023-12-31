import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../src/component/login/login';
import About from './component/about/me';
import Main from './component/dashboard/main';
import Register from './component/login/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/main' element={<Main />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;























// // import logo from './logo.svg';
// import { BrowserRouter as Router, Routes, Route,Switch, IndexRoute, Link } from "react-router-dom";
// // import './App.css';
// import login from '../src/component/login';

// function App(){
//   return (
//     <>
//       <Router>
//         <Routes>
//         <Route exact path='/login' component={<login />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

