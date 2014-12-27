var View = require('ampersand-view');


module.exports = View.extend({
    initialize: function (spec) {
        this.template = app.clientHtml['includes.hoodieAccountbar'];
    },
    events: {
        'click [data-hoodie-action=signout]': 'handleSignoutClick',
        'click [data-hoodie-action=signup]': 'handleSignupClick',
        'click [data-hoodie-action=signin]': 'handleSigninClick'
    },
    handleSignoutClick: function () {
        window.hoodie.account.signOut();
    },
    handleSigninClick: function () {
        var promise = window.hoodie.account.signIn('mike', 'mike');
        promise.done(function() {
        });
    },
    handleSignupClick: function () {
        var promise = window.hoodie.account.signUp('mike', 'mike');
        promise.done(function() {
        });
    }
});
