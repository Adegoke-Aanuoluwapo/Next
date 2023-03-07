import Link from "next/link";

const first = () => {
  return (
    <div>
      <h1>My first Post</h1>
      <h2>
        <Link href="/">Home</Link>
      </h2>
      <p>Lorem Ipsum in the bidding</p>
      <br />
      <img src="/img16.png" alt="" />
    </div>
  );
};

export default first;
