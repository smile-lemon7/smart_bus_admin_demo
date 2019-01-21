import { stringify } from 'qs';
import request from '@/utils/request';

// export async function queryProjectNotice() {
//   return request('/api/project/notice');
// }

// export async function removeRule(params) {
//   return request('/api/rule', {
//     method: 'POST',
//     body: {
//       ...params,
//       method: 'delete',
//     },
//   });
// }

export async function postAccount(params) {
  return request(`/api/login`, {
    method: 'POST',
    body: params,
  });
  
}


