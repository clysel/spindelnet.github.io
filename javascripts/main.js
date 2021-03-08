/* Base */
/* ----------------------------------------------------------*/

* {
  margin: 0;
  padding: 0;
}

html, body { height: 100%; }

body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  background-color: #fdfdfd;
}

h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: 400; }

a         { color: #2a7ae2; text-decoration: none; }
a:hover   { color: #000; text-decoration: underline; }
a:visited { color: #205caa; }

/* Utility */

.wrap:before,
.wrap:after { content:""; display:table; }
.wrap:after { clear: both; }
.wrap {
  max-width: 800px;
  padding: 0 30px;
  margin: 0 auto;
  zoom: 1;
}


/* Layout Styles */
/* ----------------------------------------------------------*/

/* Site header */

.site-header {
  border-top: 5px solid #333;
  border-bottom: 1px solid #e8e8e8;
  min-height: 56px;
  background-color: white;
}

.site-title,
.site-title:hover,
.site-title:visited {
  display: block;
  color: #333;
  font-size: 26px;
  letter-spacing: -1px;
  float: left;
  line-height: 56px;
  position: relative;
  z-index: 1;
}

.site-nav {
  float: right;
  line-height: 56px;
}

.site-nav .menu-icon { display: none; }

.site-nav .page-link {
  margin-left: 20px;
  color: #727272;
  letter-spacing: -.5px;
}

/* Site footer */

.site-footer {
  border-top: 1px solid #e8e8e8;
  padding: 30px 0;
}

.footer-heading {
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -.5px;
  margin-bottom: 15px;
}

.site-footer .column { float: left; margin-bottom: 15px; }

.footer-col-1 {
  width: 270px; /*fallback*/
  width: -webkit-calc(35% - 10px);
  width: -moz-calc(35% - 10px);
  width: -o-calc(35% - 10px);
  width: calc(35% - 10px);
  margin-right: 10px
}
.footer-col-2 {
  width: 175px; /*fallback*/
  width: -webkit-calc(23.125% - 10px);
  width: -moz-calc(23.125% - 10px);
  width: -o-calc(23.125% - 10px);
  width: calc(23.125% - 10px);
  margin-right: 10px
}
.footer-col-3 {
  width: 335px; /*fallback*/
  width: -webkit-calc(41.875%);
  width: -moz-calc(41.875%);
  width: -o-calc(41.875%);
  width: calc(41.875%);
}

.site-footer ul { list-style: none; }

.site-footer li,
.site-footer p {
  font-size: 15px;
  letter-spacing: -.3px;
  color: #828282;
}

.github-icon-svg,
.twitter-icon-svg {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  top: 3px;
}


/* Page Content styles */
/* ----------------------------------------------------------*/

.page-content {
  padding: 30px 0;
  background-color: #fff;
}


/* Home styles */
/* ----------------------------------------------------------*/

.home h1 { margin-bottom: 25px; }

.posts { list-style-type: none; }

.posts li { margin-bottom: 30px; }

.posts .post-link {
  font-size: 24px;
  letter-spacing: -1px;
  line-height: 1;
}

.posts .post-date {
  display: block;
  font-size: 15px;
  color: #818181;
}


/* Post styles */
/* ----------------------------------------------------------*/

.post-header { margin: 10px 0 30px; }

.post-header h1 {
  font-size: 42px;
  letter-spacing: -1.75px;
  line-height: 1;
  font-weight: 300;
}

.post-header .meta {
  font-size: 15px;
  color: #818181;
  margin-top: 5px;
}

.post-content { margin: 0 0 30px; }

.post-content > * { margin: 20px 0; }


.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  line-height: 1;
  font-weight: 300;
  margin: 40px 0 20px;
}

.post-content h2 {
  font-size: 32px;
  letter-spacing: -1.25px;
}

.post-content h3 {
  font-size: 26px;
  letter-spacing: -1px;
}

.post-content h4 {
  font-size: 20px;
  letter-spacing: -1px;
}

.post-content blockquote {
  border-left: 4px solid #e8e8e8;
  padding-left: 20px;
  font-size: 18px;
  opacity: .6;
  letter-spacing: -1px;
  font-style: italic;
  margin: 30px 0;
}

.post-content ul,
.post-content ol { padding-left: 20px; }

.post pre,
.post code {
  border: 1px solid #d5d5e9;
  background-color: #eef;
  padding: 8px 12px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 15px;
}

.post code { padding: 1px 5px; }

.post ul,
.post ol { margin-left: 1.35em; }

.post pre code { border: none; }

/* terminal */
.post pre.terminal {
  border: 1px solid #000;
  background-color: #333;
  color: #FFF;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.post pre.terminal code { background-color: #333; }

/* Syntax highlighting styles */
/* ----------------------------------------------------------*/

.highlight  { background: #ffffff; }
.highlight .c { color: #999988; font-style: italic } /* Comment */
.highlight .err { color: #a61717; background-color: #e3d2d2 } /* Error */
.highlight .k { font-weight: bold } /* Keyword */
.highlight .o { font-weight: bold } /* Operator */
.highlight .cm { color: #999988; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #999999; font-weight: bold } /* Comment.Preproc */
.highlight .c1 { color: #999988; font-style: italic } /* Comment.Single */
.highlight .cs { color: #999999; font-weight: bold; font-style: italic } /* Comment.Special */
.highlight .gd { color: #000000; background-color: #ffdddd } /* Generic.Deleted */
.highlight .gd .x { color: #000000; background-color: #ffaaaa } /* Generic.Deleted.Specific */
.highlight .ge { font-style: italic } /* Generic.Emph */
.highlight .gr { color: #aa0000 } /* Generic.Error */
.highlight .gh { color: #999999 } /* Generic.Heading */
.highlight .gi { color: #000000; background-color: #ddffdd } /* Generic.Inserted */
.highlight .gi .x { color: #000000; background-color: #aaffaa } /* Generic.Inserted.Specific */
.highlight .go { color: #888888 } /* Generic.Output */
.highlight .gp { color: #555555 } /* Generic.Prompt */
.highlight .gs { font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #aaaaaa } /* Generic.Subheading */
.highlight .gt { color: #aa0000 } /* Generic.Traceback */
.highlight .kc { font-weight: bold } /* Keyword.Constant */
.highlight .kd { font-weight: bold } /* Keyword.Declaration */
.highlight .kp { font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #445588; font-weight: bold } /* Keyword.Type */
.highlight .m { color: #009999 } /* Literal.Number */
.highlight .s { color: #d14 } /* Literal.String */
.highlight .na { color: #008080 } /* Name.Attribute */
.highlight .nb { color: #0086B3 } /* Name.Builtin */
.highlight .nc { color: #445588; font-weight: bold } /* Name.Class */
.highlight .no { color: #008080 } /* Name.Constant */
.highlight .ni { color: #800080 } /* Name.Entity */
.highlight .ne { color: #990000; font-weight: bold } /* Name.Exception */
.highlight .nf { color: #990000; font-weight: bold } /* Name.Function */
.highlight .nn { color: #555555 } /* Name.Namespace */
.highlight .nt { color: #000080 } /* Name.Tag */
.highlight .nv { color: #008080 } /* Name.Variable */
.highlight .ow { font-weight: bold } /* Operator.Word */
.highlight .w { color: #bbbbbb } /* Text.Whitespace */
.highlight .mf { color: #009999 } /* Literal.Number.Float */
.highlight .mh { color: #009999 } /* Literal.Number.Hex */
.highlight .mi { color: #009999 } /* Literal.Number.Integer */
.highlight .mo { color: #009999 } /* Literal.Number.Oct */
.highlight .sb { color: #d14 } /* Literal.String.Backtick */
.highlight .sc { color: #d14 } /* Literal.String.Char */
.highlight .sd { color: #d14 } /* Literal.String.Doc */
.highlight .s2 { color: #d14 } /* Literal.String.Double */
.highlight .se { color: #d14 } /* Literal.String.Escape */
.highlight .sh { color: #d14 } /* Literal.String.Heredoc */
.highlight .si { color: #d14 } /* Literal.String.Interpol */
.highlight .sx { color: #d14 } /* Literal.String.Other */
.highlight .sr { color: #009926 } /* Literal.String.Regex */
.highlight .s1 { color: #d14 } /* Literal.String.Single */
.highlight .ss { color: #990073 } /* Literal.String.Symbol */
.highlight .bp { color: #999999 } /* Name.Builtin.Pseudo */
.highlight .vc { color: #008080 } /* Name.Variable.Class */
.highlight .vg { color: #008080 } /* Name.Variable.Global */
.highlight .vi { color: #008080 } /* Name.Variable.Instance */
.highlight .il { color: #009999 } /* Literal.Number.Integer.Long */


/* media queries */
/* ----------------------------------------------------------*/


@media screen and (max-width: 750px) {

  .footer-col-1 { width: 50%; }

  .footer-col-2 {
    width: 45%; /*fallback*/
    width: -webkit-calc(50% - 10px);
    width: -moz-calc(50% - 10px);
    width: -o-calc(50% - 10px);
    width: calc(50% - 10px);
    margin-right: 0;
  }

  .site-footer .column.footer-col-3 {
    width: auto;
    float: none;
    clear: both;
  }

}

@media screen and (max-width: 600px) {

  .wrap { padding: 0 12px; }

  .site-nav {
    position: fixed;
    z-index: 10;
    top: 14px; right: 8px;
    background-color: white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
  }

  .site-nav .menu-icon {
    display: block;
    font-size: 24px;
    color: #505050;
    float: right;
    width: 36px;
    text-align: center;
    line-height: 36px;
  }

  .site-nav .menu-icon svg { width: 18px; height: 16px; }

  .site-nav .trigger {
    clear: both;
    margin-bottom: 5px;
    display: none;
  }

  .site-nav:hover .trigger { display: block; }

  .site-nav .page-link {
    display: block;
    text-align: right;
    line-height: 1.25;
    padding: 5px 10px;
    margin: 0;
  }

  .post-header h1 { font-size: 36px; }
  .post-content h2 { font-size: 28px; }
  .post-content h3 { font-size: 22px; }
  .post-content h4 { font-size: 18px; }
  .post-content blockquote { padding-left: 10px; }
  .post-content ul,
  .post-content ol { padding-left: 10px; }

  .site-footer .column {
    float: none;
    clear: both;
    width: auto;
    margin: 0 0 15px; }

}
