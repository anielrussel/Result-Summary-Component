/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "hanken" : "var(--font-family)"
      },
      colors: {
        "light-red" : "var(--light-red)",
        "light-red1" : "var(--light-red1)",
        "orangey-yellow" : "var(--orangey-yellow)",
        "orangey-yellow1" : "var(--orangey-yellow1)",
        "green-teal" : "var(--green-teal)",
        "green-teal1" : "var(--green-teal1)",
        "cobalt-blue" : "var(--cobalt-blue)",
        "cobalt-blue1" : "var(--cobalt-blue1)",
        "light-slate-blue" : "var(--light-slate-blue)",
        "light-royal-blue" : "var(--light-royal-blue)",
        "violet-blue" : "var(--violet-blue)",
        "persian-blue" : "var(--persian-blue)",
        "pale-blue" : "var(--pale-blue)",
        "light-lavender" : "var(--light-lavender)",
        "dark-gray-blue" : "var(--dark-gray-blue)"
      }
    },
  },
  plugins: [],
};
