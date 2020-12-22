import logo from './logo.svg';
import React, { Component } from 'react';
import { render } from "react-dom";
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
import IDE from './pages/IDE.js';

import AdminDashboard from './pages/Admin/AdminDashboard.js';
import AdminAddSections from './pages/Admin/AdminAddSections.js';
import AdminAddTeachers from './pages/Admin/AdminAddTeachers.js';
import AdminProfile from './pages/Admin/AdminProfile.js';
import AdminViewSections from './pages/Admin/AdminViewSections.js';
import AdminViewTeachers from './pages/Admin/AdminViewTeachers.js';

import TeacherDashboard from './pages/Teacher/TeacherDashboard.js';
import TeacherAddAssignments from './pages/Teacher/TeacherAddAssignments.js';
import TeacherAddStudents from './pages/Teacher/TeacherAddStudents.js';
import TeacherAssignments from './pages/Teacher/TeacherAssignments.js';
import TeacherProfile from './pages/Teacher/TeacherProfile.js';
import TeacherViewStudents from './pages/Teacher/TeacherViewStudents.js';
import TeacherChat from './pages/Teacher/TeacherChat.js';
import TeacherMail from './pages/Teacher/TeacherMail.js';

import Settings from './pages/Settings.js';
import Search from './components/Search.js';

function App() {

  return (
    <Router>
      <Login path="/" />
      <IDE path="/ide"/>
      <StudentHeader path="/student/">
        <StudentDashboard path="/*"/>
        <StudentChat path="/chat" />
        <StudentMail path="/mail" />
        <StudentAllAssignments path="/assignments" />
        <StudentViewAssignments path="/view-assignment" />
        <StudentProfile path="/profile" />
        <Settings path="/settings" />
      </StudentHeader>
      
      <AdminHeader path="/admin/">
        <AdminDashboard path="/*"/>
        <AdminAddSections path="/add-section"/>
        <AdminAddTeachers path="/add-teacher"/>
        <AdminProfile path="/profile"/>
        <AdminViewTeachers path="/teachers"/>
        <AdminViewSections path="/sections"/>
        <Settings path="/settings" />
      </AdminHeader>
      
      <TeacherHeader path="/teacher/">
        <TeacherDashboard path="/*"/>
        <TeacherAddAssignments path="/add-assignment"/>
        <TeacherAddStudents path="/add-student"/>
        <TeacherAssignments path="/assignments"/>
        <TeacherProfile path="/profile"/>
        <TeacherViewStudents path="/students"/>
        <TeacherChat path="/chat"/>
        <TeacherMail path="/mail"/>
        <Settings path="/settings"/>
      </TeacherHeader>
    </Router>
  );
}

export default App;
