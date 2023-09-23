import request from '@/utils/request'

export default {
// 讲师列表（条件查询分页）
// current当前页 limit每页记录数 teacherQuery条件对象
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduService/teacher/pageCondition/${current}/${limit}`,
      method: 'post',
      data: teacherQuery
    })
  }
}
