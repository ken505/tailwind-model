import "tailwindcss/tailwind.css";

const MyApp = (props) => {
  return <props.Component {...props.pageProps} />;
};

export default MyApp;
