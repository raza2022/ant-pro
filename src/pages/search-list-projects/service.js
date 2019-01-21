import request from '@/utils/request';

export async function queryFakeList(params) {
  return request(`/api/search-list-projects/fake_list`, {
    params,
  });
}
