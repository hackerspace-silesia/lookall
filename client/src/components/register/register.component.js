import './register.scss';

export const register = {
  template: require('./register.html'),
  controller: class RegisterComponent {
    constructor($log, $mdToast, UserService) {
      'ngInject';
      this.$log = $log;
      this.userService = UserService;
      this.$mdToast = $mdToast;

      this.user = {};
    }
    add() {
      this.$log.debug('user', this.user);
      this.userService.register(this.user).then(res => {
        this.$log.debug('res', res);
        if (res.data.error === 'user_already_exists') {
          this.$mdToast.show(
            this.$mdToast.simple()
              .textContent('Istnieje już taki użytkownik :(')
              .position('bottom')
              .hideDelay(3000)
          );
        } else {
          this.$mdToast.show(
            this.$mdToast.simple()
              .textContent('Dzięki!')
              .position('bottom')
              .hideDelay(2000)
          );
        }
      });
    }
  }
};
