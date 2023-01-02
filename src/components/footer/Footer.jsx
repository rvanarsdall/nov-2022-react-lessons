// write a function that export a single h6 element with a copyright type in the current year. copyright 2023
// make sure you export it and import on the App.jsx file - mount it below the at the bottom.

// BONUS: See if you can make that year dynamic so it not hard coded.

function Footer() {
  const currentYear = new Date().getFullYear();
  return <h6>Copyright {currentYear}</h6>;
}

export default Footer;
