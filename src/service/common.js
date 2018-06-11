import request from '@/common/utils/axios'

export function communityList(params) {
    return request.get('community/building/page',params)
}