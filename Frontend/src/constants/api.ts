const AUTH = Object.freeze({
  LOG_IN: '/api/v2/user/login',
  SIGN_UP: '/api/v2/user/signup',
  VALIDATE_TOKEN: '/api/v2/user/me',
  ME: '/api/v2/user/me',
});

const MOU = Object.freeze({
  GET_MOUS: '/api/v2/mou/all',
  DELETE_MOU_BY_ID: (id: number | string) => `/api/v2/mou/${id}`,
  UPLOAD_MOU: '/api/v2/mou',
  GET_MOU_BY_ID: (id: number | string) => `/api/v2/mou/${id}`,
  UPDATE_MOU_BY_ID: (id: number | string) => `/api/v2/mou/${id}`,
});

const POST = Object.freeze({
  GET_POSTS: '/api/v2/post/all',
  GET_POSTS_BY_BOARD: (id: number | string) =>
    `/api/v2/post/${id}/all`,
  GET_POST_BY_ID: (id: number | string) => `/api/v2/post/${id}`,
  GET_POST_BOARDS: '/api/v1/board/all',
  UPDATE_POST_BY_ID: (id: number | string) => `/api/v2/post/${id}`,
  UPLOAD_POST: '/api/v2/post',
  DELETE_POST_BY_ID: (id: number | string) => `/api/v2/post/${id}`,
});

const POPUP = Object.freeze({
  GET_POPUPS: '/api/v1/popup/all',
  GET_ACTIVE_POPUPS: '/api/v1/popup/all/active',
});

const SUPPORTING_STARTUP = Object.freeze({
  GET_SUPPORTING_STARTUPS: '/api/v1/supporting_startup/all',
});

const HISTORY = Object.freeze({
  GET_HISTORIES: '/api/v1/history/all',
});

const PUBLIC_EVENT = Object.freeze({
  GET_PUBLIC_EVENTS: '/api/v2/public_event/all',
  GET_PUBLIC_EVENT_BY_ID: (id: number | string) =>
    `/api/v2/public_event/${id}`,
});

const PUBLIC_PARTICIPANT = Object.freeze({
  SUBMIT_PUBLIC_EVENT: (id: number | string) =>
    `/api/v1/participant/${id}/create`,
});

const JUDGING_EVENT = Object.freeze({
  GET_JUDGING_EVENTS: '/api/v1/judging_event/all',
  GET_JUDGING_EVENT_BY_ID: (id: number | string) =>
    `/api/v1/judging_event/get/${id}`,
});

const JUDGING_PARTICIPANT = Object.freeze({
  SUBMIT_JUDGING_EVENT: '/api/v1/judging_participant/create',
  GET_JUDGING_PARTICIPANTS: (id: number | string) =>
    `/api/v1/judging_participant/${id}/all`,
  GET_JUDGING_PARTICIPANT_BY_ID: (id: number | string) =>
    `/api/v1/judging_participant/get/${id}`,
});

const JUDGING_RESULT = Object.freeze({
  SUBMIT_JUDGING_RESULT: '/api/v1/judging_result/create',
  GET_JUDGING_RESULT: '/api/v1/judging_result/get',
  GET_JUDGING_RESULT_BY_ID: (id: number | string) =>
    `/api/v1/judging_result/get/${id}`,
});

const SPONSORING_COMPANY = Object.freeze({
  GET_SPONSORING_COMPANIES: '/api/v2/sponsoring_company/all',
  DELETE_SPONSORING_COMPANY_BY_ID: (id: number | string) =>
    `/api/v2/sponsoring_company/${id}`,
  GET_SPONSORING_COMPANY_BY_ID: (id: number | string) =>
    `/api/v2/sponsoring_company/${id}`,
  UPLOAD_SPONSORING_COMPANY: '/api/v2/sponsoring_company',
  UPDATE_SPONSORING_COMPANY_BY_ID: (id: number | string) =>
    `/api/v2/sponsoring_company/${id}`,
});

const SPONSOR = Object.freeze({
  GET_SPONSORS: '/api/v1/sponsor/all',
  SUBMIT_SPONSOR: '/api/v1/sponsor/create',
});

const FILE = Object.freeze({
  UPLOAD_FILE: '/api/v1/file/upload',
  UPLOAD_FILES: '/api/v1/file/uploads',
  DOWNLOAD_FILE: (filename: string) =>
    `/api/v1/file/download/${filename}`,
});

const PRIVATE_PARTICIPANT = Object.freeze({
  SUBMIT_PRIVATE_EVENT: '/api/v1/private_participant/create',
});

const USER = Object.freeze({
  GET_USERS: '/api/v2/user/all',
  GET_USER_BY_ID: (id: number | string) => `/api/v2/user/${id}`,
  UPDATE_JUDGING_PERMISSION: (
    userId: number | string,
    judgingEventId: number | string
  ) => `/api/v2/user/${userId}/judging_permission/${judgingEventId}`,
});

const FILE_V2 = Object.freeze({
  UPLOAD_FILES: '/api/v2/file',
  DOWNLOAD_FILE: (filename: string) => `/api/v2/file/${filename}`,
  DELETE_FILE: (filename: string) => `/api/v2/file/${filename}`,
  UPLOAD_CROP_IMAGE: '/api/v2/file/crop',
});

const ADVISOR = Object.freeze({
  GET_ADVISORS: '/api/v2/advisor/all',
  UPLOAD_ADVISOR: '/api/v2/advisor',
  DELETE_ADVISOR_BY_ID: (id: number | string) =>
    `/api/v2/advisor/${id}`,
  GET_ADVISOR_BY_ID: (id: number | string) => `/api/v2/advisor/${id}`,
  UPDATE_ADVISOR_BY_ID: (id: number | string) =>
    `/api/v2/advisor/${id}`,
});

const POST_V2 = Object.freeze({
  GET_POSTS: '/api/v2/post/all',
  UPLOAD_POST: '/api/v2/post',
  UPDATE_POST_BY_ID: (id: number | string) => `/api/v2/post/${id}`,
});

const BANNER = Object.freeze({
  GET_ACTIVE_BANNERS: '/api/v2/banner/all/active',
  GET_BANNERS: '/api/v2/banner/all',
  UPLOAD_BANNER: '/api/v2/banner',
  DELETE_BANNER_BY_ID: (id: number | string) =>
    `/api/v2/banner/${id}`,
  UPDATE_BANNER_BY_ID: (id: number | string) =>
    `/api/v2/banner/${id}`,
  GET_BANNER_BY_ID: (id: number | string) => `/api/v2/banner/${id}`,
});

export const API_ROUTE = Object.freeze({
  AUTH,
  BANNER,
  MOU,
  ADVISOR,
  POST,
  POPUP,
  SUPPORTING_STARTUP,
  HISTORY,
  PUBLIC_EVENT,
  PUBLIC_PARTICIPANT,
  JUDGING_EVENT,
  JUDGING_PARTICIPANT,
  JUDGING_RESULT,
  SPONSORING_COMPANY,
  SPONSOR,
  FILE,
  PRIVATE_PARTICIPANT,
  USER,
  FILE_V2,
  POST_V2,
});
