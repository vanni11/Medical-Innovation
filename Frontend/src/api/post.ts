import { API_ROUTE } from '@/constants';
import { Axios } from '@/libs/Axios';

const unAuthAxios = new Axios();
const authAxios = new Axios(true);

export const getPosts = async (skip: number, limit: number) => {
  const res = await unAuthAxios.getByParams(
    API_ROUTE.POST.GET_POSTS,
    {
      skip: skip,
      limit: limit,
    }
  );

  return res;
};

export const getPostsByBoardId = async (
  boardId: number | string,
  skip: number,
  limit: number
) => {
  const res = await unAuthAxios.getByParams(
    API_ROUTE.POST.GET_POSTS_BY_BOARD(boardId),
    {
      skip: skip,
      limit: limit,
    }
  );

  return res;
};

export const getPostById = async (id: number | string) => {
  const res = await unAuthAxios.get(
    API_ROUTE.POST.GET_POST_BY_ID(id)
  );

  return res;
};

export const getPostBoards = async (skip: number, limit: number) => {
  const res = await authAxios.getByParams(
    API_ROUTE.POST.GET_POST_BOARDS,
    {
      skip: skip,
      limit: limit,
    }
  );

  return res;
};

export const updatePostById = async (
  id: number | string,
  title: string,
  boardId: number | string,
  content: string
) => {
  const res = await authAxios.put(
    API_ROUTE.POST.UPDATE_POST_BY_ID(id),
    {
      title: title,
      board_id: boardId,
      content: content,
    }
  );

  return res;
};
