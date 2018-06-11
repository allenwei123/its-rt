import request from '@/common/utils/axios'

export function login(params) {
    return request.post('user/signIn',params)
}