import { MdDashboard , MdCallSplit, MdAssignmentAdd, MdQuiz } from "react-icons/md";
import { FaUserGraduate, FaDiscourse, FaChalkboardTeacher, FaPaperPlane,FaMarker  } from "react-icons/fa";
export const ADMIN_NAVIGATION =[
    {
        key:"dashboard",
        lable:"Dashboard",
        path:"/Navbar",
        icon: <MdDashboard />,
        stype:"Admin"
    },
    {
        key:"course",
        lable:"Course",
        path:"/Navbar/Course",
        icon: <FaDiscourse  />,
        stype:"Admin"
    },
    {
        key:"faculty",
        lable:"Educator",
        path:"/Navbar/Educator",
        icon: <FaChalkboardTeacher  />,
        stype:"Admin"
    },
    {
        key:"student",
        lable:"Student List",
        path:"/Navbar/Students",
        icon: <FaUserGraduate />,
        stype:"Admin"
    },
    {
        key:"batch",
        lable:"Batch Allotment",
        path:"/Navbar/BatchAllotment",
        icon: <MdCallSplit />,
        stype:"Admin"
    },
    {
        key:"dashboard",
        lable:"Dashboard",
        path:"/Navbar",
        icon: <MdDashboard />,
        stype:"Staff"
    },
    {
        key:"student",
        lable:"Student List",
        path:"/Navbar/Students",
        icon: <FaUserGraduate />,
        stype:"Staff"
    },
    {
        key:"studyplan",
        lable:"Study Plan",
        path:"/Navbar/StudyPlan",
        icon: <FaPaperPlane />,
        stype:"Staff"
    },
    {
        key:"assignment",
        lable:"Assignment",
        path:"/Navbar/Assignment",
        icon: <MdAssignmentAdd />,
        stype:"Staff"
    },
    {
        key:"evaluation",
        lable:"Evaluation",
        path:"/Navbar/Evaluation",
        icon: <FaMarker />,
        stype:"Staff"
    },
    {
        key:"dashboard",
        lable:"Dashboard",
        path:"/Navbar",
        icon: <MdDashboard />,
        stype:"STUDENT"
    },{
        key:"studyplan",
        lable:"Study Plan",
        path:"/Navbar/ViewStudyPlan",
        icon: <FaPaperPlane />,
        stype:"STUDENT"
    },
    {
        key:"assignmentSubmit",
        lable:"Assignment ",
        path:"/Navbar/AssignmentSubmit",
        icon: <MdAssignmentAdd />,
        stype:"STUDENT"
    }
]