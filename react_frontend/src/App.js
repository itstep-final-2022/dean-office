import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavbarMenu from './components/Navbar';
import ShowStudents from './components/ShowStudents';
import AddStudent from './components/AddStudent';
import StudentDetail from './components/StudentDetail';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'purple'}}>Dean Office</h1>
      <hr/>
      <h3 style={{color: 'darkcyan'}}>Система управління персональними даними студентів</h3>
      <BrowserRouter>
        <NavbarMenu />
        <Routes>
          <Route path="/" element={<ShowStudents/>} />
          <Route path="/addStudent" element={<AddStudent/>} />
          <Route path="/:id/update" element={<UpdateStudent/>} />
          <Route path="/:id/" element={<StudentDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
