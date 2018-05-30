import Footer from '../components/footer.vue'
import Header from '../components/header.vue'
export default {
  name: "find_teachters",
  components:{
      Footer,Header
  },
  data(){
      return {
          teacherArr: [
              {
                  imgSrc: require('../img/find-teachters-pic1.png'),
                  name:'刘金涛',
                  sex:'男',
                  number:'9079',
                  school:'天津科技大学',
                  description:'本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...',
                  salary:'60',
                  time:'2018/03/21',
                  major:'数学教育专业',
                  job:'在职初中教师'
              },
              {
                imgSrc:require('../img/find-teachters-pic2.png'),
                name:'白旭飞',
                sex:'男',
                number:'9079',
                school:'天津科技大学',
                description:'本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...',
                salary:'60',
                time:'2018/03/21',
                major:'数学教育专业',
                job:'在职高中教师'
            },
            {
                imgSrc:require('../img/find-teachters-pic3.png'),
                name:'张无忌',
                sex:'男',
                number:'9079',
                school:'天津科技大学',
                description:'本人师范大学毕业，09年至今一线在职教师，有丰富的教学辅导经验...',
                salary:'60',
                time:'2018/03/21',
                major:'数学教育专业',
                job:'在职大学教师'
            },
          ]
      }
  }
};