var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
  label: 'Usuários',
  hidden: true,
  noedit: true,
  nodelete: true,
});

User.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
  canAccessKeystone: { type: Boolean, initial: true },
});

User.register();
