import React from "react";

const Blog = () => {
	return (
		<div className="my-10">
			<h1 className="text-center text-5xl border p-5">
				Assignment 10 Questoin & Answers
			</h1>
			<div className="my-5">
				<h3 className="font-bold text-xl">
					Question-01: Difference between SQL and NoSQL?
				</h3>
				<p>
					<span className="font-bold">Answer: </span>SQL is the programming
					language used to interface with relational databases. (Relational
					databases model data as records in rows and tables with logical links
					between them). NoSQL is a class of DBMs that are non-relational and
					generally do not use SQL.
				</p>
			</div>
			<div className="my-5">
				<h3 className="font-bold text-xl">
					Question-02: What is JWT, and how does it work?
				</h3>
				<p>
					<span className="font-bold">Answer: </span>JSON Web Token (JWT) is an
					open standard (RFC 7519) that defines a compact and self-contained way
					for securely transmitting information between parties as a JSON
					object. This information can be verified and trusted because it is
					digitally signed.
				</p>
			</div>
			<div className="my-5">
				<h3 className="font-bold text-xl">
					Question-03: What is the difference between javascript and NodeJS?
				</h3>
				<p>
					<span className="font-bold">Answer: </span>JavaScript is a simple
					programming language that can be used with any browser that has the
					JavaScript Engine installed. Node. js, on the other hand, is an
					interpreter or execution environment for the JavaScript programming
					language.
				</p>
			</div>
			<div className="my-5">
				<h3 className="font-bold text-xl">
					Question-04: How does NodeJS handle multiple requests at the same
					time?
				</h3>
				<p>
					<span className="font-bold">Answer: </span>How NodeJS handle multiple
					client requests? NodeJS receives multiple client requests and places
					them into EventQueue. NodeJS is built with the concept of event-driven
					architecture. NodeJS has its own EventLoop which is an infinite loop
					that receives requests and processes them.
				</p>
			</div>
		</div>
	);
};

export default Blog;
