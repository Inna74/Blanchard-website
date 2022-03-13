let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },

  messages: {
    name: {
      required: 'Поле обязательно для заполнения',
      minLength: 'Недопустимый формат',
    },
    tel: {
      required: 'Поле обязательно для заполнения',
      minLength: 'Недопустимый формат',
    }
  }
});
