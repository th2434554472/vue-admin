<template>
  <div class="app-container">
    讲师列表
  </div>
</template>

<script>
import teacher from '@/api/teacher/teacher'
export default {
  data() {//定义变量和初始值
    return {
      list:null,//查询之后接口返回集合
      page:1,//当前页
      limit:10,//每页记录数
      total:0,//总记录数
      teacherQuery:{}

    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(){
      teacher.getTeacherListPage(this.page.limit,this.teacherQuery)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
