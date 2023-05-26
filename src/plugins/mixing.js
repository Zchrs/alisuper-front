// import store from '../store';
const mixing = {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    coinFormat: function (x) {
      x = +x;
      if (x != null) {
        x = parseFloat(x);
        x = x.toFixed(2);
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      } else {
        return 0;
      }
    },
    formatDate: function (date) {
      if (date) {
        return moment(date).format('Y-MM-DD HH:mm');
      } else {
        return '-';
      }
    },
    formatDateHumanize: function (date) {
      if (date) {
        return moment(date).fromNow();
      } else {
        return '-';
      }
    },
    unixData: function (dateunix) {
      if (dateunix) {
        var a = new Date(dateunix * 1000);
        var months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time =
          date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
      }
    },
    getFile(route, url, extension = 'svg') {
      return new URL(
        `/src/assets/${route}/${url}.${extension}`,
        import.meta.url
      ).href;
    },
  },
  created() {},
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
};

export default mixing;
