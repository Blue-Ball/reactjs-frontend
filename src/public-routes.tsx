import React from "react";

import { EgRouteConfig } from "typings";
import { Redirect } from "react-router-dom";
import RenderRoutes from "components/RenderRoutes";

import homeIcon from "static/img/home-icon-white.svg";
import dashboardIcon from "static/img/dashboard-new.png";
import orgIcon from "static/img/org-icon-white.svg";
import bulletinIcon from "static/img/bulletin-board.svg";
import calendarIcon from "static/img/calander-white.svg";
import bookmarkIcon from "static/img/bookmark.png";
import courseIcon from "static/img/course-white.svg";
import sheetIcon from "static/img/sheet.svg";
import userIcon from "static/img/user-icon.svg";
import usersIcon from "static/img/icon_feather_users.svg";
import emailIcon from "static/img/email_icon.svg";
import organizerIcon from "static/img/organizer_icon.svg";

import Home from "pages/Home";

import PdfExportDemo from "pages/moneytrainer/PdfExportDemo";

import ActivityApply from "pages/micepass/ActivityApply";
import ActivityInfo from "pages/micepass/ActivityInfo";
import ActivitySettings from "pages/micepass/ActivitySettings";
import Checkin from "pages/micepass/Checkin";
import Checkout from "pages/micepass/Checkout";
import MicepassHome from "pages/micepass/Home";
import Pricing from "pages/micepass/Pricing";
import Reference from "pages/micepass/Reference";
import Shop from "pages/micepass/Shop";
import Showcase from "pages/micepass/Showcase";
import SurveyAnalysis from "pages/micepass/SurveyAnalysis";
import SurveyEditor from "pages/micepass/SurveyEditor";

import KmsLayout from "components/KmsLayout";
import KmsHome from "pages/kms/Home";
import Login from "pages/kms/Login";
import KmsDashboard from "pages/kms/Dashboard";
import OrgChart from "pages/kms/OrgChart";
import OrgBusiness from "pages/kms/OrgBusiness";
import OrgCenter from "pages/kms/OrgCenter";
import BulletinBoard from "pages/kms/BulletinBoard";
import Calendar from "pages/kms/Calendar";
import CaseWork from "pages/kms/CaseWork";
import Administration from "pages/kms/Administration";
import Courses from "pages/kms/Courses";
import CoursesManagement from "pages/kms/CoursesManagement";
import Files from "pages/kms/Files";
import Members from "pages/kms/Members";
import MemberRoles from "pages/kms/MemberRoles";
import Search from "pages/kms/Search";

const publicRoutes: EgRouteConfig[] = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    path: "/mt",
    component: RenderRoutes,
    routes: [
      {
        component: PdfExportDemo,
        path: "/mt/pdf-export",
        breadcrumbName: "Pdf Export",
      },
    ],
  },
  {
    path: "/mice",
    component: RenderRoutes,
    routes: [
      {
        component: MicepassHome,
        path: "/mice",
        breadcrumbName: "Micepass Home",
        exact: true,
      },
      {
        component: ActivityInfo,
        path: "/mice/activity-info",
        breadcrumbName: "Activity Info",
      },
      {
        component: ActivityApply,
        path: "/mice/activity-apply",
        breadcrumbName: "Activity Apply",
      },
      {
        component: ActivitySettings,
        path: "/mice/activity-settings",
        breadcrumbName: "Activity Settings",
      },
      {
        component: Pricing,
        path: "/mice/pricing",
        breadcrumbName: "Pricing",
      },
      {
        component: Showcase,
        path: "/mice/showcase",
        breadcrumbName: "Showcase",
      },
      {
        component: Reference,
        path: "/mice/reference",
        breadcrumbName: "Reference",
      },
      {
        component: Checkin,
        path: "/mice/checkin",
        breadcrumbName: "Check In",
      },
      {
        component: Checkout,
        path: "/mice/checkout",
        breadcrumbName: "Check Out",
      },
      {
        component: Shop,
        path: "/mice/shop",
        breadcrumbName: "Shop",
      },
      {
        component: SurveyEditor,
        path: "/mice/survey-editor",
        breadcrumbName: "SurveyEditor",
        routes: [
          {
            path: "/mice",
            breadcrumbName: "Home",
            component: SurveyEditor,
            exact: true,
            menuIcon: <img src={homeIcon} alt="Home" />,
          },
          {
            path: "/mice1/test-survey",
            breadcrumbName: "Event Management",
            component: SurveyEditor,
            menuIcon: <img src={calendarIcon} alt="Event Management" />,
          },
          {
            path: "/mice2/test-survey",
            breadcrumbName: "Member Management",
            component: SurveyEditor,
            menuIcon: <img src={usersIcon} alt="Member Management" />,
            collapse: true,
            routes: [
              {
                path: "/kms/org-info/open-chat",
                breadcrumbName: "Open Chat",
                component: SurveyEditor,
              },
            ],
          },
          {
            path: "/mice3/test-survey",
            breadcrumbName: "Questionnaire Management",
            component: SurveyEditor,
            menuIcon: <img src={bookmarkIcon} alt="Questionnaire Management" />,
            collapse: true,
            
          },
          {
            path: "/mice4/test-survey",
            breadcrumbName: "Email template management",
            component: SurveyEditor,
            menuIcon: <img src={emailIcon} alt="Email template management" />,
          },
          {
            path: "#",
            breadcrumbName: "Organizer",
            component: SurveyEditor,
            menuIcon: <img src={organizerIcon} alt="Organizer" />,
            collapse: true,
            routes: [
              {
                path: "#",
                breadcrumbName: "CaseWork",
                component: SurveyEditor,
              },
              {
                path: "#",
                breadcrumbName: "Administration",
                component: SurveyEditor,
              },
            ],
          }
        ],
      },

      {
        component: SurveyAnalysis,
        path: "/mice/survey-analysis",
        breadcrumbName: "SurveyAnalysis",
      },
    ],
  },
  {
    path: "/kms/login",
    breadcrumbName: "Login",
    component: Login,
    menuIcon: <img src={homeIcon} alt="Home" />,
  },
  {
    path: "/kms",
    component: KmsLayout,
    routes: [
      {
        path: "/kms",
        breadcrumbName: "Kms Home",
        component: KmsHome,
        exact: true,
        menuIcon: <img src={homeIcon} alt="Home" />,
      },
      {
        path: "/kms/dashboard",
        breadcrumbName: "Dashboard",
        component: KmsDashboard,
        menuIcon: <img src={dashboardIcon} alt="Dashboard" />,
      },
      {
        path: "/kms/org",
        breadcrumbName: "Org Info",
        component: RenderRoutes,
        menuIcon: <img src={orgIcon} alt="Org Info" />,
        collapse: true,
        routes: [
          {
            path: "/kms/org",
            breadcrumbName: "Chart",
            component: OrgChart,
            exact: true,
          },
          {
            path: "/kms/org/business",
            breadcrumbName: "Business",
            component: OrgBusiness,
          },
          {
            path: "/kms/org/center",
            breadcrumbName: "Center Info",
            component: OrgCenter,
          },
        ],
      },
      {
        path: "/kms/bulletin-board",
        breadcrumbName: "Bulletin Board",
        component: BulletinBoard,
        menuIcon: <img src={bulletinIcon} alt="Bulletin Board" />,
      },
      {
        path: "/kms/calendar",
        breadcrumbName: "Calendar",
        component: Calendar,
        menuIcon: <img src={calendarIcon} alt="Calendar" />,
      },
      {
        path: "/kms/spec",
        breadcrumbName: "Specification",
        component: RenderRoutes,
        menuIcon: <img src={bookmarkIcon} alt="Specification" />,
        collapse: true,
        routes: [
          {
            path: "/kms/spec",
            breadcrumbName: "CaseWork",
            component: CaseWork,
            exact: true,
          },
          {
            path: "/kms/spec/administration",
            breadcrumbName: "Administration",
            component: Administration,
          },
        ],
      },
      {
        path: "/kms/courses",
        breadcrumbName: "Courses",
        component: RenderRoutes,
        menuIcon: <img src={courseIcon} alt="Courses" />,
        collapse: true,
        routes: [
          {
            path: "/kms/courses",
            breadcrumbName: "Online Courses",
            component: Courses,
            exact: true,
          },
          {
            path: "/kms/courses/management",
            breadcrumbName: "Courses Management",
            component: CoursesManagement,
          },
        ],
      },
      {
        path: "/kms/files",
        breadcrumbName: "Files",
        component: Files,
        menuIcon: <img src={sheetIcon} alt="Files" />,
      },
      {
        path: "/kms/hrm",
        breadcrumbName: "HRM",
        component: RenderRoutes,
        menuIcon: <img src={userIcon} alt="HRM" />,
        collapse: true,
        routes: [
          {
            path: "/kms/hrm",
            breadcrumbName: "Members",
            component: Members,
            exact: true,
          },
          {
            path: "/kms/hrm/member-roles",
            breadcrumbName: "Member roles",
            component: MemberRoles,
          },
        ],
      },
      {
        path: "/kms/search",
        breadcrumbName: "Search",
        component: Search,
        menuIcon: <img src={homeIcon} alt="Search" />,
      },
    ],
  },
  {
    path: "/*",
    render: () => <Redirect to="/" />,
  },
];

export default publicRoutes