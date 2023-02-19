import Meter from "../../public/icons/meter.svg";
import WorkFlow from "../../public/icons/workflow.svg";
import Calender from "../../public/icons/calender.svg";
import SocialRM from "../../public/icons/social-network.svg";
import Analytic from "../../public/icons/analytic.svg";
import UserLead from "../../public/icons/user-lead.svg";
import UserStar from "../../public/icons/user-star.svg";
import Notification from "../../public/icons/notification.svg";
import Document from "../../public/icons/document.svg";
import DocumentChecked from "../../public/icons/document-checked.svg";
import Segment from "../../public/icons/segment.svg";
import { ColumnType, ProjectType, SideBarLinksType, TaskType } from "@/types";

export const SideBarLinks: SideBarLinksType[] = [
  {
    path: "/board",
    label: "dashboard",
    icon: Meter,
  },
  {
    path: "/board/workflow",
    label: "workflow",
    icon: WorkFlow,
  },
  {
    path: "/board/calender",
    label: "calender",
    icon: Calender,
  },
  {
    path: "/board/socialrm",
    label: "socialRM",
    icon: SocialRM,
  },
  {
    path: "/board/metrics",
    label: "metrics",
    icon: Analytic,
  },
  {
    path: "/board/leads",
    label: "leads",
    icon: UserLead,
  },
  {
    path: "/board/users",
    label: "users",
    icon: UserStar,
  },
  {
    path: "/board/notifications",
    label: "notifications",
    icon: Notification,
  },
  {
    path: "/board/document",
    label: "Documents",
    icon: Document,
  },
  {
    path: "/board/segments",
    label: "segments",
    icon: Segment,
  },
];

export const Projects: ProjectType[] = [
  {
    id: "1",
    name: "ContactCRM",
    color: `var(--electric-pink-color)`,
    icon: UserStar,
  },
  {
    id: "2",
    name: "AgentBook",
    color: `var(--bright--yellow-color)`,
    icon: DocumentChecked,
  },
  {
    id: "3",
    name: "W4RTeam",
    color: `var(--light-blue-color)`,
    icon: UserLead,
  },
  {
    id: "4",
    name: "LeadBank",
    color: `var(--cold-purple-color)`,
    icon: null,
  },
];

export const Tasks: TaskType[] = [
  {
    id: "1",
    title: "First Task",
    status: "backlog",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2023-02-20",
  },
  {
    id: "2",
    title: "Second Task",
    status: "backlog",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2023-02-10",
  },
  {
    id: "3",
    title: "Third Task",
    status: "backlog",
    project: Projects[1],
    createdAt: "2023-02-10",
  },
  {
    id: "4",
    title: "Fourth Task",
    status: "backlog",
    project: Projects[2],
    createdAt: "2023-02-10",
  },
  {
    id: "5",
    title: "Fifth Task",
    status: "todo",
    project: Projects[3],
    createdAt: "2023-01-10",
  },
  {
    id: "6",
    title: "Sixth Task",
    status: "going",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2023-01-10",
  },
  {
    id: " 7",
    title: "Seventh Task",
    status: "review",
    project: Projects[1],
    createdAt: "2023-02-10",
  },
  {
    id: "8",
    title: "Eighth Task",
    status: "review",
    project: Projects[1],
    createdAt: "2023-05-10",
  },
  {
    id: "9",
    title: "Ninth Task",
    status: "done",
    project: Projects[0],
    tags: [
      {
        name: "api.contactrm.com",
        color: `var(--peach-cream-color)`,
      },
      {
        name: "api.contactrm",
        color: `var(--pink-lace-color)`,
      },
    ],
    createdAt: "2021-03-10",
  },
  {
    id: "10",
    title: "Tenth Task",
    status: "done",
    project: Projects[1],
    createdAt: "2022-02-10",
  },
];

export const Columns: ColumnType[] = [
  {
    label: "Backlog",
    value: "backlog",
  },
  {
    label: "To Do",
    value: "todo",
  },
  {
    label: "In Progress",
    value: "going",
  },
  {
    label: "Review",
    value: "review",
  },
  {
    label: "Done",
    value: "done",
  },
];
