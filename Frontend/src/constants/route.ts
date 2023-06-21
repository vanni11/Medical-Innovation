export const ROUTE = Object.freeze({
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  ME: '/me',
  SIGN_UP: '/signup',
  INTRODUCTION: Object.freeze({
    ROOT: '/introduction',
    FOUNDER: '/introduction/founder',
    MESSAGE: '/introduction/message',
    MISSION_AND_HISTORY: '/introduction/mission_and_history',
    ORGCHART_AND_PROJECT: '/introduction/orgchart_and_project',
  }),
  PROGRAM: Object.freeze({
    ROOT: '/programs',
    EVENT: '/programs/event',
    ACCELERATING: '/programs/accelerating',
    RESEARCH_SUPPORT_PROJECT: '/programs/research_support_project',
    TRAND: '/programs/trand',
  }),
  NEWS: Object.freeze({
    ROOT: '/news',
    ANNOUNCEMENT: '/news/announcement',
    PRESS_RELEASE: '/news/press_release',
    COLUMN: '/news/column',
    PHOTH: '/news/photo',
  }),
  SUPPORT: Object.freeze({
    ROOT: '/support',
    SPONSORSHIP: '/support/sponsorship',
    SPONSORS: '/support/sponsors',
    BENEFITS: '/support/benefits',
    HISTORY: '/support/history',
    APPLY: '/support/sponsorship/apply',
  }),
  MOU: '/mou',
  ADVISORS: '/advisors',
  PREPARING: '/preparing',
  PRIVACY_POLICY: '/privacy-policy',
  ADMIN: Object.freeze({
    ROOT: '/admin',
    POST: Object.freeze({
      ROOT: '/admin/post',
      UPLOAD: '/admin/post/upload',
      ALL: '/admin/post/all',
    }),
  }),
});
