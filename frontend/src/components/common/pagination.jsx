import { useState } from "react";
import ReactPaginate from "react-paginate"
// import "bootstrap/dist/css/bootstrap.min.css"

function Pagination({items, RenderItems, itemsPerPage, ...rest} ) {
     // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(currentItems, items, rest)

  return (
    <>
      <RenderItems currentItems={currentItems} {...rest} />
      <ReactPaginate
        className="pagination"
        activeClassName="active"
        breakLabel="..."
        nextLabel="mbele"
        onPageChange={handlePageClick}
        disabledClassName="disabled"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="nyuma"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination

