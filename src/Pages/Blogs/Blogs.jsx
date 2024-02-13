import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blog -LeepPro </title>
      </Helmet>
      <div className="my-14">
        <h1 className="text-3xl uppercase lg:text-4xl  font-extrabold  font-Inter text-center mb-6">
          <span className="text-[#E9155B]">blogs</span> are here
        </h1>

        <div className="space-y-12">
          <h3 className="text-xl lg:text-2xl text-[#111] font-bold font-Inter text-center">
            <span className="text-[#E55473]">Question-1</span>
            What is an access token and refresh token?
          </h3>
          <p className="text-[#111] font-Inter font-semibold text-xl">
            An access token and a refresh token are both used in the context of
            authentication and authorization in computer security. They are
            commonly used in web and mobile applications to provide secure
            access to resources and services.
          </p>

          <p className="text-[#111] font-Inter font-semibold text-xl">
            <span className="font-bold">Access Token:</span>
            An access token is a credential that is used by an application to
            access an API. It is typically a string of letters and numbers that
            grants the bearer access to specific resources. Access tokens are
            usually issued to a user after authentication and are used to prove
            the user's identity when making requests to an API. They have a
            limited lifetime and expire after a certain period of time. The
            access token is included in the header of HTTP requests to the
            server in order to access protected resources.
          </p>

          <p className="text-[#111] font-Inter font-semibold text-xl">
            <span className="font-bold">Refresh Token:</span>A refresh token is
            a special kind of token used to obtain a new access token. It is
            used to request a new access token when the original access token
            has expired. Refresh tokens are long-lived and can be used to obtain
            new access tokens for an extended period of time without requiring
            the user to re-authenticate. They are typically more secure than
            access tokens because they are used less frequently and can be
            revoked if necessary. Refresh tokens are used to maintain persistent
            authentication sessions and provide a seamless user experience
            without requiring frequent re-authentication.
          </p>

          <h3 className="text-xl lg:text-2xl text-[#111] font-bold font-Inter text-center">
            <span className="text-[#E55473]">Question-2</span>
            How do they work and where should we store them on the client-side?
          </h3>
          <p className="text-[#111] font-Inter font-semibold text-xl">
            <span className="font-bold"> Cookies: </span>
            Storing tokens in HTTP-only cookies can help protect against
            cross-site scripting (XSS) attacks. However, this method is not
            immune to all forms of attacks and requires careful consideration of
            security measures.
          </p>

          <p className="text-[#111] font-Inter font-semibold text-xl">
            <span className="font-bold">
              Local Storage or Session Storage:{" "}
            </span>
            These are popular choices for storing tokens on the client-side, but
            they are vulnerable to cross-site scripting attacks. It's important
            to mitigate these risks by implementing proper security measures and
            regularly validating user input.
          </p>

          <p className="text-[#111] font-Inter font-semibold text-xl">
            <span className="font-bold">Secure HttpOnly Cookies: </span>
            Storing tokens in secure HTTP-only cookies can be a secure approach
            since they cannot be accessed by JavaScript. This method can prevent
            certain types of attacks, but it's essential to consider other
            security best practices as well.
          </p>
          <p className="text-[#111] font-Inter font-semibold text-xl">
            <span className="font-bold">In-Memory Storage: </span>
            Storing tokens in memory can be relatively secure, but it has
            limitations. If the page is refreshed or the application is closed,
            the token will be lost.
          </p>
          <h3 className="text-xl lg:text-2xl text-[#111] font-bold font-Inter text-center">
            <span className="text-[#E55473]">Question-3</span>
            What is express js?{" "}
          </h3>
          <p className="text-[#111] font-Inter font-semibold text-xl">
            Express.js is a popular and lightweight web application framework
            for Node.js. It provides a robust set of features to develop web and
            mobile applications. With a minimalistic approach, Express allows
            developers to create powerful APIs and web applications efficiently.
            It provides a range of HTTP utility methods and middleware, making
            it easier to handle routes, requests, and responses. Developers
            often choose Express for its flexibility, simplicity, and a vast
            ecosystem of plugins and extensions, which enables the creation of
            scalable and customizable web applications.
          </p>
          <h3 className="text-xl lg:text-2xl text-[#111] font-bold font-Inter text-center">
            <span className="text-[#E55473]">Question-3</span>
            What is Nest JS?{" "}
          </h3>
          <p className="text-[#111] font-Inter font-semibold text-xl">
            NestJS, on the other hand, is a progressive Node.js framework built
            on top of Express, which is designed to facilitate the development
            of efficient, reliable, and scalable server-side applications. It
            combines elements of object-oriented programming, functional
            programming, and functional reactive programming to provide
            developers with a robust set of tools and features. NestJS
            emphasizes modularity, making it easy to organize and scale
            large-scale applications. It also offers strong dependency
            injection, which helps in creating highly testable and maintainable
            code. NestJS leverages TypeScript, providing strong typing and
            enhancing the overall developer experience. With its powerful
            architecture and comprehensive documentation, NestJS has gained
            popularity for building enterprise-grade applications and APIs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
