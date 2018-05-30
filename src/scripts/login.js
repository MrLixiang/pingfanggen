import Footer from '../components/footer.vue'
import Header from '../components/header.vue'


export default {
  name: "teacher_login",
  data() {
    return {
      isTeacher: true,
      teacher: '教员登录',
      student: '学员登录',
    }
  },
  created() {
    this.isTeacher = this.$route.query.type ? true : false;
  },
  computed: {
    loginPersion() {
      return this.isTeacher ? this.teacher : this.student;
    }
  },
  methods: {
    teacherLogin() {
      this.isTeacher = true;
    },
    studentLogin() {
      this.isTeacher = false;
    },
  },
  components: {
    Footer,
    Header
  }
};