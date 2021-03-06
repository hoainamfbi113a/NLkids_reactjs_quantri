import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminContent from '../content/AdminContent'
import AdminEditItemMember from '../content/adminEdit_Item/AdminEditItemMember'
import AdminAddItemMember from '../content/adminAddItem/AdminAddItemMember'
import AdminContentMember from '../content/adminContent/AdminContentMember';

import AdminContentQuestion from '../content/adminContent/AdminContentQuestion'
import AdminAddItemQuestion from '../content/adminAddItem/AdminAddItemQuestion'
import AdminEditItemQuestion from '../content/adminEdit_Item/AdminEditItemQuestion'

import AdminContentExam from '../content/adminContent/AdminContentExam'
import AdminAddItemExam from '../content/adminAddItem/AdminAddItemExam'
import AdminAddItemExamExcel from '../content/adminAddItem/AdminAddItemExamExcel'
import AdminEditItemExam from '../content/adminEdit_Item/AdminEditItemExam'
import AdminEditItemNews from '../content/adminEdit_Item/AdminEditItemNews'

import AdminContentResult from '../content/adminContent/AdminContentResult'

import AdminAddItemLession from '../content/adminAddItem/AdminAddLession'
import AdminContentLession from '../content/adminContent/AdminContentLession'
import AdminEditItemlession from '../content/adminEdit_Item/AdminEditItemLession'


import AdminAddItemNews from '../content/adminAddItem/AdminAddItemNews';
//import AdminEditItemNews from '../content/adminEdit_Item/AdminEditItemNews';
import AdminContentNews from '../content/adminContent/AdminContentNews'
import AdminAddItemvideoLearning from '../content/adminAddItem/AdminAddItemvideoLearning';
import AdminEditItemvideoLearning from '../content/adminEdit_Item/AdminEditItemvideoLearning';
import AdminContentvideoLearning from '../content/adminContent/AdminContentvideoLearning'
import AdminAddItemclassSubject from '../content/adminAddItem/AdminAddItemclassSubject';
import AdminEditItemclassSubject from '../content/adminEdit_Item/AdminEditItemclassSubject';
import AdminContentclassSubject from '../content/adminContent/AdminContentclassSubject'

import AdminContentgame from '../content/adminContent/AdminContentgame'
import AdminAddItemgame from '../content/adminAddItem/AdminAddItemgame'

import AdminContentforum from '../content/adminContent/AdminContentforum'
export default class RouterURL extends Component {
    
    render() {
        return (
            <div>
             <Route exact path="/admin" component = {AdminContent}></Route>
             <Route exact path="/admin/member" component = {AdminContentMember}></Route>
             <Route exact path="/admin/member/add" component = {AdminAddItemMember}></Route>
             <Route exact path="/admin/member/edit/:id" component = {AdminEditItemMember}></Route>
             <Route exact path="/admin/question" component = {AdminContentQuestion}></Route>
             <Route exact path="/admin/question/add" component = {AdminAddItemQuestion}></Route>
             <Route exact path="/admin/question/edit/:id" component = {AdminEditItemQuestion}></Route>
             <Route exact path="/admin/exam" component = {AdminContentExam}></Route>
             <Route exact path="/admin/exam/add" component = {AdminAddItemExam}></Route>
             <Route exact path="/admin/exam/addexcel" component = {AdminAddItemExamExcel}></Route>
             <Route exact path="/admin/exam/edit/:id" component = {AdminEditItemExam}></Route>
             <Route exact path="/admin/result" component = {AdminContentResult}></Route>
             <Route exact path="/admin/news" component = {AdminContentNews}></Route>
             <Route exact path="/admin/news/add" component = {AdminAddItemNews}></Route>
             <Route exact path="/admin/news/edit/:id" component = {AdminEditItemNews}></Route>
             <Route exact path="/admin/lession" component = {AdminContentLession}></Route>
             <Route exact path="/admin/lession/add" component = {AdminAddItemLession}></Route>
             <Route exact path="/admin/lession/edit/:id" component = {AdminEditItemlession}></Route>
             <Route exact path="/admin/videoLearning" component = {AdminContentvideoLearning}></Route>
             <Route exact path="/admin/videoLearning/add" component = {AdminAddItemvideoLearning}></Route>
             <Route exact path="/admin/videoLearning/edit/:id" component = {AdminEditItemvideoLearning}></Route>
             <Route exact path="/admin/classSubject" component = {AdminContentclassSubject}></Route>
             <Route exact path="/admin/classSubject/add" component = {AdminAddItemclassSubject}></Route>
             <Route exact path="/admin/classSubject/edit/:id" component = {AdminEditItemclassSubject}></Route>
             <Route exact path="/admin/game" component = {AdminContentgame}></Route>
             <Route exact path="/admin/game/add" component = {AdminAddItemgame}></Route>
             <Route exact path="/admin/forum" component = {AdminContentforum}></Route>
            </div>
        )
    }
}
