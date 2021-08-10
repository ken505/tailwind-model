const ITEMS = [
  {
    href: "https://blueprint-gamma.vercel.app/",
    title: "My Vision",
    // image: <IoPersonCircle className={classes.image} />,
  },
  {
    href: "https://portfolio-vert-three.vercel.app/",
    title: "Growth record",
    // image: <IoPersonCircle className={classes.image} />,
  },
];
// リンクタグの中にはチルドレンは一つ、っていうルールなのね。。
export const card = (item) => {
  return (
    <div className={classes.aTagGrid}>
      {ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href}>
            <a className={classes.aTag}>
              <div>
                {/* Image データの有無による出し分け処理 */}
                {/* item.src が truthy だったら Image を表示、 falsy だったら null (非表示)*/}
                {/* Image タグに値がないとエラーになるため。 */}
                <div className={classes.linkGrid}>
                  {item.image ? (
                    <div className={classes.linkContent}>{item.image}</div>
                  ) : null}
                  {item.title ? (
                    <h2 className={classes.linkContent}>{item.title}</h2>
                  ) : null}
                </div>
                {item.description ? (
                  <p className={classes.linkInnerDescription}>
                    {item.description}
                  </p>
                ) : null}
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
