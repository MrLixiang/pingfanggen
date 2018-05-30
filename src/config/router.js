import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Introduction from '../page/introduction';
import StudentInfo from '../page/studentInfo';
import ClassFeedback from '../page/classFeedback';
import TeacherRegisters from '../page/teacherRegisters';
import Home from '../page/home';
import record from '../page/record'
import teacherRegister from '../page/teacherRegister'
import TeacherMessage from "@/page/teacher_message";
import TeacherCenter from "@/page/teacher_center";
import StudentCenter from "@/page/student_center";
import Find_students from '../page/find_students'
import Find_teachters from '../page/find_teachters'
import Personal_center from '../page/personal_center'
import Login from '../page/login'
import Teacher_registration_finish from '../page/teacher_registration_finish'
import helpCenter from '../page/helpCenter'
import helpTeacher from '../page/helpTeacher'
import helpParents from '../page/helpParents'
import studentRegister from '../page/studentRegister'
import studentRegisterSuccess from '../page/studentRegisterSuccess'

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/record',
    name: 'record',
    component: record
  }, {
    path: '/introduction',
    name: 'introduction',
    component: Introduction
  }, {
    path: '/studentInfo',
    name: 'studentInfo',
    component: StudentInfo
  }, {
    path: '/teacherRegister',
    name: 'teacherRegister',
    component: teacherRegister
  }, {
    path: "/teacher_message",
    name: "teacher_message",
    component: TeacherMessage
  }, {
    path: "/teacher_center",
    name: "teacher_center",
    component: TeacherCenter
  }, {
    path: "/student_center",
    name: "student_center",
    component: StudentCenter
  }, {
    path: '/helpCenter',
    name: 'helpCenter',
    component: helpCenter
  }, {
    path: '/helpTeacher',
    name: 'helpTeacher',
    component: helpTeacher
  }, {
    path: '/helpParents',
    name: 'helpParents',
    component: helpParents
  }, {
    path: '/studentRegister',
    name: 'studentRegister',
    component: studentRegister
  }, {
    path: '/studentRegisterSuccess',
    name: 'studentRegisterSuccess',
    component: studentRegisterSuccess
  }, {
    path: '/find_students',
    name: 'find_students',
    component: Find_students
  }, {
    path: '/find_teachters',
    name: 'find_teachters',
    component: Find_teachters
  }, {
    path: '/personal_center',
    name: 'personal_center',
    component: Personal_center
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, 
 {
    path: '/teacher_registration_finish',
    name: 'teacher_registration_finish',
    component: Teacher_registration_finish
  }, {
    path: '/feedback',
    name: 'feedback',
    component: ClassFeedback
  }, {
    path: '/teacherReg',
    name: 'teacherReg',
    component: TeacherRegisters
  }]
})
