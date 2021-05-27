import logo from './logo.svg';
import React, { Component } from 'react';
import { Router, Link } from "@reach/router";

import Login from './pages/Login.js';

import StudentHeader from './components/StudentHeader.js';
import AdminHeader from './components/AdminHeader.js';
import TeacherHeader from './components/TeacherHeader.js';


import StudentDashboard from './pages/Student/StudentDashboard.js';
import StudentChat from './pages/Student/StudentChat.js';
import StudentMail from './pages/Student/StudentMail.js';
import StudentAllAssignments from './pages/Student/StudentAllAssignments.js';
import StudentViewAssignments from './pages/Student/StudentViewAssignments.js';
import StudentProfile from './pages/Student/StudentProfile.js';
import ViewAssignmentStd from './pages/Student/ViewAssignment'
import IDE from './pages/IDE.js';

import AdminDashboard from './pages/Admin/AdminDashboard.js';
import AdminAddSections from './pages/Admin/AdminAddSections.js';
import AdminAddTeachers from './pages/Admin/AdminAddTeachers.js';
import AdminProfile from './pages/Admin/AdminProfile.js';
import AdminViewSections from './pages/Admin/AdminViewSections.js';
import AdminViewSectionDetails from './pages/Admin/ViewSectionDetails';
import AdminViewTeachers from './pages/Admin/AdminViewTeachers.js';
import AdminViewteacherProfile from './pages/Admin/ViewTeacherProfile'
import AtRiskStudents from './pages/Admin/AtRiskStudentsList'
import AssignTeacherSection from './pages/Admin/AssignTeacherSection'
import TeachersWithARS from './pages/Admin/TeachersWithARS'
import LecturerStudents from './pages/Admin/LecturerStudents'
import EditSection from './pages/Admin/EditSection'
import Subjects from './pages/Admin/Subjects'
import AdminAddStudent from './pages/Admin/AdminAddStudent'
import StudentProfile3 from './pages/Admin/StudentProfile.js';
import ViewStudents from './pages/Admin/StudentsList'

import TeacherDashboard from './pages/Teacher/TeacherDashboard.js';
import TeacherAddAssignments from './pages/Teacher/TeacherAddAssignments.js';
import TeacherAddStudents from './pages/Teacher/TeacherAddStudents.js';
import TeacherAssignments from './pages/Teacher/TeacherAssignments.js';
import TeacherProfile from './pages/Teacher/TeacherProfile.js';
import TeacherAssignmentPreview from './pages/Teacher/TeacherAssignmentPreview.js';
import TeacherViewStudents from './pages/Teacher/TeacherViewStudents.js';
import TeacherSubmittedAssignments from './pages/Teacher/TeacherSubmittedAssignments.js';
import TeacherChat from './pages/Teacher/TeacherChat.js';
import TeacherMail from './pages/Teacher/TeacherMail.js';
import ViewAssignment from './pages/Teacher/ViewAssignment'
import UpdateAssignment from './pages/Teacher/UpdateAssignment'
import TeacherAssignedAssignments from './pages/Teacher/AssignedAssignments'
import ViewAssignedAssignment from './pages/Teacher/ViewAssignedAssignment'
import StudentProfile2 from './pages/Teacher/StudentProfile.js';
import StudentCallibration from './pages/Teacher/CallibrateStundents'
import ErrorPage from './pages/error.js'
import StudentSubmission from './pages/Teacher/StudentSubmission'

import Settings from './pages/Settings.js';
import Search from './components/Search.js';

function App() {

  return (
    <Router>
      <Login path="/" />
      <IDE path="/ide"/>
      <ErrorPage path='/error/' />
      
      <StudentHeader path="/student/">
        <StudentDashboard path="/*"/>
        <StudentChat path="/chat" />
        <StudentMail path="/mail" />
        <StudentAllAssignments path="/assignments" />
        <StudentViewAssignments path="/view-assignment" />
        <StudentProfile path="/profile" />
        <ViewAssignmentStd path="/viewAssignment"/>
        <Settings path="/settings" />
      </StudentHeader>
      
      <AdminHeader path="/admin/">
        <AdminDashboard path="/*"/>
        <AdminAddSections path="/add-section"/>
        <AdminAddTeachers path="/add-teacher"/>
        <AdminProfile path="/profile"/>
        <AdminViewTeachers path="/teachers"/>
        <AdminViewSections path="/sections"/>
        <AdminViewSectionDetails path="/sectionDetails"/>
        <AtRiskStudents path="/atRiskStudents"/>
        <TeachersWithARS path="/teachersWithARS"/>
        <Settings path="/settings" />
        <AdminViewteacherProfile path="/teachersProfile"/>
        <LecturerStudents path='/lecturerStudents'/>
        <EditSection path='/editSection'/>
        <AssignTeacherSection path='/assigneSection' />
        <Subjects path='/subjects'/>
        <AdminAddStudent path='/addStudent'/>
        <StudentProfile3 path='/studentProfile' />
        <ViewStudents path='/viewStudents'/>
      </AdminHeader>
      
      <TeacherHeader path="/teacher/">
        <TeacherDashboard path="/*"/>
        <TeacherAddAssignments path="/add-assignment"/>
        <TeacherAddStudents path="/add-student"/>
        <TeacherAssignments path="/assignments"/>
        <TeacherSubmittedAssignments path="/submissions/" />
        <TeacherAssignmentPreview path="/preview/" />
        <TeacherProfile path="/profile"/>
        <TeacherViewStudents path="/students"/>
        <TeacherChat path="/chat"/>
        <TeacherMail path="/mail"/>
        <ViewAssignment path="/viewAssignment"/>
        <UpdateAssignment path="/updateAssignment"/>
        <TeacherAssignedAssignments path="/assignedAssignments"/>
        <ViewAssignedAssignment path='/viewAssignedAssignment'/>
        <StudentSubmission path='/studentSubmission'/>
        <StudentProfile2 path='/studentProfile' />
        <StudentCallibration path='/studentCallibration' />
        <Settings path="/settings"/>
      </TeacherHeader>
    </Router>
  );
}

export default App;
