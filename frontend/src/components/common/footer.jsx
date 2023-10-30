import List from "./list.jsx";

function Footer() {
  const listItems = [
    {
      id: 1,
      content: (
        <a href="." className="text--light text--muted">
          Anuani/Address: Mbeya, Tz
        </a>
      ),
    },
    {
      id: 2,
      content: (
        <a href="." className="text--light text--muted">
          Namba ya simu: +255 235 5667
        </a>
      ),
    },
    {
      id: 3,
      content: (
        <a href="." className="text--light text--muted">
          Email: info@nyumbazakupangaonline.com
        </a>
      ),
    },
  ];
  return (
    <div className="footer">
      <h5 className="footer-title">MAWASILIANO YETU</h5>
      <List items={listItems}></List>
    </div>
  );
}

export default Footer;
