var clientHtml = {};

clientHtml["body"] = "<body>\n" +
   "<nav class=\"navbar navbar-default\">\n" +
   "  <div class=\"container-fluid\">\n" +
   "    <div class=\"navbar-header\"><a href=\"/\" class=\"navbar-brand\">Ampersand-Hoodie Example App</a></div>\n" +
   "    <ul class=\"nav navbar-nav\">\n" +
   "      <li><a href=\"/\">Home</a></li>\n" +
   "      <li><a href=\"/collections\">Collection demo</a></li>\n" +
   "      <li><a href=\"/info\">Info</a></li>\n" +
   "    </ul>\n" +
   "    <div data-hook=\"hoodie-accountbar\"></div>\n" +
   "\n" +
   "  </div>\n" +
   "</nav>\n" +
   "<div class=\"container\">\n" +
   "  <main data-hook=\"page-container\"></main>\n" +
   "</div>\n" +
   "</body>";

clientHtml["head"] = "<meta content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0\" name=\"viewport\">\n" +
   "<meta content=\"yes\"  name=\"apple-mobile-web-app-capable\">";

clientHtml["includes.formInput"] = "<div class=\"form-group\"><label data-hook=\"label\"></label>\n" +
   "  <input class=\"form-control\"/>\n" +
   "  <div data-hook=\"message-container\">\n" +
   "    <div data-hook=\"message-text\" class=\"alert alert-danger\"></div>\n" +
   "  </div>\n" +
   "</div>\n" +
   "";

clientHtml["includes.hoodieAccountbar"] = "<div class=\"hoodie-accountbar\">\n" +
   "\n" +
   "  <div class=\"hoodie-account-signedout\">\n" +
   "            <span class=\"btn-group\">\n" +
   "              <button class=\"btn btn-small btn-primary\" data-hoodie-action=\"signup\">Sign Up</button>\n" +
   "              <button class=\"btn btn-small btn-primary\" data-hoodie-action=\"signin\">Sign In</button>\n" +
   "            </span>\n" +
   "  </div><!-- /.hoodie-account-signedout -->\n" +
   "\n" +
   "  <div class=\"hoodie-account-signedin\">\n" +
   "    Hello,\n" +
   "    <span class=\"hoodie-username\"><!-- usern name will be filled in here --></span>\n" +
   "            <span class=\"btn-group\">\n" +
   "              <button class=\"btn btn-small btn-primary\" data-hoodie-action=\"signout\">Sign Out</button>\n" +
   "            </span>\n" +
   "  </div><!-- /.hoodie-account-signedin -->\n" +
   "\n" +
   "  <div class=\"hoodie-account-error\">\n" +
   "    Hello,\n" +
   "    <span class=\"hoodie-username\"><!-- username will be filled in here --></span>.\n" +
   "            <span class=\"btn-group\">\n" +
   "              <button class=\"btn btn-small btn-danger\" data-hoodie-action=\"signin\">Authentication error: Sign in again</button>\n" +
   "            </span>\n" +
   "  </div><!-- /.hoodie-account-error -->\n" +
   "</div>\n" +
   "";

clientHtml["includes.person"] = "<li class=\"person list-group-item\">\n" +
   "  <img data-hook=\"avatar\" width=\"40\" height=\"40\"/>\n" +
   "  <a data-hook=\"name\"></a>\n" +
   "  <span class=\"btn-group pull-right\">\n" +
   "    <a data-hook=\"action-edit\" class=\"btn btn-default\">edit </a>\n" +
   "    <a href=\"#\" data-hook=\"action-delete\" class=\"btn btn-danger\">delete</a>\n" +
   "  </span>\n" +
   "</li>";

clientHtml["pages.collectionDemo"] = "<section class=\"page pageOne\"><h2>Collection demo</h2>\n" +
   "\n" +
   "  <p>Intelligently rendering collections can be a bit tricky. </p>\n" +
   "\n" +
   "  <p><a href=\"https://github.com/ampersandjs/ampersand-view\">ampersand-view's</a> <code>renderCollection()</code> method\n" +
   "    makes it simple.</p>\n" +
   "\n" +
   "  <p>The only code required to manage the collection is:</p><pre><code>this.renderCollection(\n" +
   "    this.collection,\n" +
   "    PersonView,\n" +
   "    this.queryByHook('people-list')\n" +
   "    );</code></pre>\n" +
   "  <h3>People container:</h3>\n" +
   "  <ul data-hook=\"people-list\" class=\"list-group\"></ul>\n" +
   "\n" +
   "  <table data-hook=\"people-table\"> </table>\n" +
   "  <p>Try it by clicking the buttons</p>\n" +
   "\n" +
   "  <div class=\"buttons btn-group\">\n" +
   "    <button data-hook=\"reset\" class=\"btn btn-default\">.reset()</button>\n" +
   "    <button data-hook=\"fetch\" class=\"btn btn-default\">.fetch()</button>\n" +
   "    <button data-hook=\"shuffle\" class=\"btn btn-default\">.shuffle()</button>\n" +
   "    <a href=\"/person/add\" class=\"btn btn-default\">Add Person</a></div>\n" +
   "  <p>Events are always managed so you don't get any leaks.</p></section>";

clientHtml["pages.home"] = "<section class=\"page home\"><h2>Welcome to a skeleton for Learning App</h2>\n" +
   "\n" +
   "  <p>If you \"view source\" you'll see it's 100% client rendered.</p>\n" +
   "\n" +
   "  <p>Click around the site using the nav bar at the top. </p>\n" +
   "\n" +
   "  <p>Things to note:\n" +
   "  <ul>\n" +
   "    <li>The url changes, no requests are made to the server.</li>\n" +
   "    <li>Refreshing the page will always get you back to the same page</li>\n" +
   "    <li>Page changes are nearly instantaneous</li>\n" +
   "    <li>In development mode, you don't need to restart the server to see changes, just edit and refresh if you are running \"grunt watch\".</li>\n" +
   "  </ul>\n" +
   "  </p></section>";

clientHtml["pages.info"] = "<section class=\"page pageTwo\"><h2>Simple Page Example</h2>\n" +
   "\n" +
   "  <p>This page was rendered by an Ampersand page view file at amp/client/js/pages/info.js.</p></section>";

clientHtml["pages.personAdd"] = "<section class=\"page add-person\"><h2>Add Person</h2>\n" +
   "\n" +
   "  <p>This form and all behavior is defined by the form view in <code>client/forms/person.js</code>.</p>\n" +
   "\n" +
   "  <p>The same form-view is used for both editing and creating new users.</p>\n" +
   "\n" +
   "  <form data-hook=\"person-form\">\n" +
   "    <fieldset data-hook=\"field-container\"></fieldset>\n" +
   "    <div class=\"buttons\">\n" +
   "      <button data-hook=\"reset\" type=\"submit\" class=\"btn\">Submit</button>\n" +
   "    </div>\n" +
   "  </form>\n" +
   "</section>";

clientHtml["pages.personEdit"] = "<section class=\"page edit-person\"><h2>Edit Person</h2>\n" +
   "\n" +
   "  <p>This form and all behavior is defined by the form view in <code>client/forms/person.js</code>.</p>\n" +
   "\n" +
   "  <p>The same form-view is used for both editing and creating new users.</p>\n" +
   "\n" +
   "  <form data-hook=\"person-form\">\n" +
   "    <fieldset data-hook=\"field-container\"></fieldset>\n" +
   "    <div class=\"buttons\">\n" +
   "      <button data-hook=\"reset\" type=\"submit\" class=\"btn\">Submit</button>\n" +
   "    </div>\n" +
   "  </form>\n" +
   "</section>";

clientHtml["pages.personView"] = "<section class=\"page view-person\">\n" +
   "  <h2 data-hook=\"name\"></h2><img data-hook=\"avatar\" width=\"80\" height=\"80\"/>\n" +
   "\n" +
   "  <div class=\"buttons\"><a data-hook=\"edit\" class=\"btn\">Edit</a>\n" +
   "    <button data-hook=\"delete\" class=\"btn\">Delete</button>\n" +
   "  </div>\n" +
   "</section>";
module.exports = clientHtml;