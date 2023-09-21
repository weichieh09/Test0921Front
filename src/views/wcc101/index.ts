import { getTest } from '@/api/wcc101'
import Axios from 'axios'

export default {
  data() {
    return {
      result: null
    }
  },
  created() {
    this.getTestOrginal()
  },
  methods: {
    getTestOrginal() {
      Axios.get('http://localhost:8080/api/wcc101/test').then(response => {
        this.result = response.data
      })
    },
    getTest() {
      getTest().then(response => {
        this.result = response.data
      })
    },
  }
}