export default function Header() {
  return (
    <div className="mobile:flex flex-col items-center justify-start md:flex-row md:justify-between md:p-7 mx-3 desketop:flex desketop:justify-between  desketop:px-40 desketop:pt-10">
      <div>
        <h2 className="text-white font-bold text-2xl my-5 md:text-3xl md:my-0 desketop:my-0">
          ruanGomes
        </h2>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/rug19">
          <img src="/images/icon-github.svg" alt="icon gitub" />
        </a>
        <a href="">
          <img
            src="/images/icon-frontend-mentor.svg"
            alt="icon front end mentor"
          />
        </a>
        <a href="">
          <img src="/images/icon-linkedin.svg" alt="icon linkedin" />
        </a>
        <a href="">
          <img src="/images/icon-twitter.svg" alt="icon twitter" />
        </a>
      </div>
    </div>
  );
}
