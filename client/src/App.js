import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Dashboard } from './Components/Dashboard';
import { StudentList } from './Components/MainPages/StudentList';
import { BatchAllotment } from './Components/MainPages/BatchAllotment';
import { Course } from './Components/MainPages/Course';
import { Educator } from './Components/MainPages/Educator';
import { StudyPlan } from './Components/MainPages/StudyPlan';
import { Assignments } from './Components/MainPages/Assignments';
import { SubmitAssingment } from './Components/MainPages/SubmitAssingment';
import { ViewStudyPlan } from './Components/MainPages/ViewStudyPlan';
import { Evaluation } from './Components/MainPages/Evaluation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Navbar' element={<Navbar/>}>
          <Route index element={<Dashboard/>} />
          <Route path='/Navbar/Students' element={<StudentList/>}/>
          <Route path='/Navbar/BatchAllotment' element={<BatchAllotment/>}/>
          <Route path='/Navbar/Course' element={<Course />}/>
          <Route path='/Navbar/Educator' element={<Educator/>}/>
          <Route path='/Navbar/StudyPlan' element={<StudyPlan/>}/>
          <Route path='/Navbar/Assignment' element={<Assignments/>}/>
          <Route path='/Navbar/Evaluation' element={<Evaluation/>}/>
          <Route path='/Navbar/ViewStudyPlan' element={<ViewStudyPlan/>}/>
          <Route path='/Navbar/AssignmentSubmit' element={<SubmitAssingment/>}/>
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
