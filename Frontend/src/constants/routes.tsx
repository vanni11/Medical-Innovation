import { Banner } from '@/components/banner';
import { DefaultFooter } from '@/components/footers';
import { AdminHeader, HomeHeader } from '@/components/headers';
import {
  AdminWrapper,
  DefaultWrapper,
  HomeWrapper,
  PageWrapper,
} from '@/components/wrappers';
import {
  Login,
  Logout,
  Home,
  Signup,
  NotFound,
  PrivacyPolicy,
  Mou,
  Advisors,
  Post,
  Founder,
  ChairmanMessage,
  MissionAndHistory,
  OrgchartAndProject,
  Events,
  EventDetail,
  EventRegistration,
  Accelerating,
  ResearchSupportProject,
  Announcement,
  PressRelease,
  Trand,
  Column,
  Photo,
  Sponsorship,
  Benefits,
  SponsorshipHistory,
  SponsorshipApply,
  Sponsors,
  JudgingEventAll,
  JudgingEventDetail,
  JudgingEventRegistration,
  JudgingParticipantAll,
  JudgingResultCreate,
  PrivateEventRegistration,
  AdminUserAll,
  AdminUserPermissionEdit,
  AdminPostAll,
  AdminPostEdit,
} from '@/pages';

interface RouteConfig {
  PATH: string;
  COMPONENT: () => JSX.Element;
  HEADER: () => JSX.Element;
  FOOTER?: () => JSX.Element;
  BANNER?: () => JSX.Element;
  WRAPPER: ({
    children,
  }: {
    children: React.ReactNode;
  }) => JSX.Element;
  AUTH: boolean;
  ADMIN?: boolean;
}

type RouteMap = RouteConfig[];

export const ROUTE_MAP: RouteMap = [
  {
    PATH: '/',
    COMPONENT: Home,
    HEADER: HomeHeader,
    BANNER: Banner,
    FOOTER: DefaultFooter,
    WRAPPER: HomeWrapper,
    AUTH: false,
  },
  {
    PATH: '/login',
    COMPONENT: Login,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: DefaultWrapper,
    AUTH: false,
  },
  {
    PATH: '/logout',
    COMPONENT: Logout,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: DefaultWrapper,
    AUTH: false,
  },
  {
    PATH: '/signup',
    COMPONENT: Signup,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: DefaultWrapper,
    AUTH: false,
  },
  {
    PATH: '/privacy-policy',
    COMPONENT: PrivacyPolicy,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/mou',
    COMPONENT: Mou,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/advisors',
    COMPONENT: Advisors,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/post/:id',
    COMPONENT: Post,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/introduction',
    COMPONENT: Founder,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/introduction/founder',
    COMPONENT: Founder,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/introduction/message',
    COMPONENT: ChairmanMessage,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/introduction/mission_and_history',
    COMPONENT: MissionAndHistory,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/introduction/orgchart_and_project',
    COMPONENT: OrgchartAndProject,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs',
    COMPONENT: Events,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs/event',
    COMPONENT: Events,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs/event/:id/detail',
    COMPONENT: EventDetail,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs/event/:id/registration',
    COMPONENT: EventRegistration,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs/accelerating',
    COMPONENT: Accelerating,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs/research_support_project',
    COMPONENT: ResearchSupportProject,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/programs/trand',
    COMPONENT: Trand,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/news',
    COMPONENT: Announcement,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/news/announcement',
    COMPONENT: Announcement,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/news/press_release',
    COMPONENT: PressRelease,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/news/column',
    COMPONENT: Column,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/news/photo',
    COMPONENT: Photo,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/support',
    COMPONENT: Sponsorship,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/support/sponsorship',
    COMPONENT: Sponsorship,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/support/benefits',
    COMPONENT: Benefits,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/support/sponsors',
    COMPONENT: Sponsors,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/support/history',
    COMPONENT: SponsorshipHistory,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
  {
    PATH: '/support/sponsorship/apply',
    COMPONENT: SponsorshipApply,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/judging/event/all',
    COMPONENT: JudgingEventAll,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/judging/event/:event_id/detail',
    COMPONENT: JudgingEventDetail,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/judging/event/:event_id/registration',
    COMPONENT: JudgingEventRegistration,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/judging/result/:event_id/all',
    COMPONENT: JudgingParticipantAll,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/judging/result/:event_id/:participant_id/:nth/create',
    COMPONENT: JudgingResultCreate,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/judging/result/:event_id/:participant_id/:nth/create',
    COMPONENT: JudgingResultCreate,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/private_event/:id/registraion',
    COMPONENT: PrivateEventRegistration,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: true,
  },
  {
    PATH: '/admin',
    COMPONENT: AdminUserAll,
    HEADER: AdminHeader,
    WRAPPER: AdminWrapper,
    AUTH: true,
  },
  {
    PATH: '/admin/user/all',
    COMPONENT: AdminUserAll,
    HEADER: AdminHeader,
    WRAPPER: AdminWrapper,
    AUTH: true,
    ADMIN: true,
  },
  {
    PATH: '/admin/user/permission/edit/:id',
    COMPONENT: AdminUserPermissionEdit,
    HEADER: AdminHeader,
    WRAPPER: AdminWrapper,
    AUTH: true,
    ADMIN: true,
  },
  {
    PATH: '/admin/post/all',
    COMPONENT: AdminPostAll,
    HEADER: AdminHeader,
    WRAPPER: AdminWrapper,
    AUTH: true,
    ADMIN: true,
  },
  {
    PATH: '/admin/post/edit/:id',
    COMPONENT: AdminPostEdit,
    HEADER: AdminHeader,
    WRAPPER: AdminWrapper,
    AUTH: true,
    ADMIN: true,
  },
  {
    PATH: '*',
    COMPONENT: NotFound,
    HEADER: HomeHeader,
    FOOTER: DefaultFooter,
    WRAPPER: PageWrapper,
    AUTH: false,
  },
];
