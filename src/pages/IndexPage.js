import React from "react";

export async function getServerSideProps() {
  const userRequest = await fetch("https://example.com/api/user");
  const userData = await userRequest.json();
  return {
    props: {
      user: userData,
    },
  };
}

const IndexPage = (props) => {
  return <div>Welcome, {props.user}!</div>;
};

export default IndexPage;
