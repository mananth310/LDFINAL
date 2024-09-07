import React from 'react'
import { Grid } from './DashboardFIles/Grid'
import { Chart } from './DashboardFIles/Chart'
import { StudentPieChart } from './DashboardFIles/StudentPieChart'
import { NewStudent } from './DashboardFIles/NewStudent'
import { Faculty } from './DashboardFIles/Faculty'
import {StudentList} from './MainPages/StudentList'
import {StudyPlan} from './MainPages/StudyPlan'
import {ViewStudyPlan} from './MainPages/ViewStudyPlan'
import { SubmitAssingment } from './MainPages/SubmitAssingment'
export const Dashboard = () => {
  return (
    <>
    <div className=''>
      <div className='p-4 bg-gray-200 h-screen'>
        {
          localStorage.getItem("stype")==="Admin" ? <> <Grid/>
          <div className='flex flex-row gap-4 w-full'>
              <Chart/>
              <StudentPieChart/>
          </div>
          <div className='flex flex-row gap-4 w-full'>
              <NewStudent/>
              <Faculty />
          </div></>:""
        }
        {
          localStorage.getItem("stype")==="Staff" ? <> 
          <div className='flex flex-col gap-4 w-full'>
              <StudentList/>
              <StudyPlan />
          </div></>:""
        }
         {
          localStorage.getItem("stype")==="STUDENT" ? <> 
          <div className='flex flex-col gap-4 w-full'>
              
              <SubmitAssingment/>
              <ViewStudyPlan />
          </div></>:""
        } 
      </div>
    </div>
    </>
  )
}
