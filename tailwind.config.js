/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html", "./partials/**/*.hbs"],
  safelist: ["border-pa-magenta", "btn-blue"],
  theme: {
    extend: {
      backgroundColor: {
        "pa-blue": "#17b3e4",
        "gt-blue": "#53B1FD",
        "gt-green": "#05d563",
        "gt-dark": "#14151e",
        "gt-green-dark": "#1B5E20",
        "gt-green-light": "#E9FCF2",
        "pa-blue-light": "#f0fcff",
        "pa-magenta": "#d81671",
        "pa-light-grey": "#f7f7f7",
        "pa-dark-blue": "#1B5E20",
        "pa-light-blue": "#effcff",
        "pa-white": "#ffffff",
        "gt-grey":"rgb(238, 238, 240)"
      },
      textColor: {
        "pa-grey":"#374151",
        "pa-text-white": "#ffffff",
        "pa-text-grey": "#fafafb",
        "pa-blue": "#17b3e4",
        "pa-magenta": "#d81671",
        "pa-dark-blue": "#1B5E20",
        "gt-blue": "#53B1FD",
        "gt-green": "#05d563",
        "gt-dark": "#14151e",
        "gt-magenta": "#F63D68",
        "gt-green-light": "#E9FCF2",
        "gt-green-dark": "#1B5E20",
      },
      boxShadow: {
        "pa-magenta-button": "4px 2px 35px 0 #d81671",
        "pa-blue-button": "4px 2px 35px 0 #17b3e4",
      },
      borderColor: {
        "pa-blue": "#17b3e4",
        "pa-magenta": "#d81671",
        "gt-green": "#05d563",
        "gt-dark": "#14151e",
        "gt-green-dark": "#1B5E20",
      },
      fill: {
        "pa-magenta": "4px 2px 35px 0 #d81671",
        "pa-blue-button": "4px 2px 35px 0 #17b3e4",
        "pa-box-shadow": "0 .5rem 1rem rgba(0,0,0,.15)",
      },
      screens:{
        'xs' :'300px'
   }
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "940px",
          },
          "@screen xl": {
            maxWidth: "1120px",
          },
          "@screen 2xl": {
            maxWidth: "1270px",
          },
        },
      });
    },
  ],
};
