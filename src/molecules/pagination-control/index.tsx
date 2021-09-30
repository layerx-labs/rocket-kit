import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import * as Styles from './styles';

export interface PageControlProps {
  page: number;
  pageCount: number;
  hrefBuilder?: any;
  onPageChange?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  ariaLabelBuilder?: any;
}

const PaginationControl = (props: PageControlProps) => {
  const [pageDisplayed, setPageDisplayed] = useState(3);

  const {
    page = 0,
    pageCount,
    hrefBuilder = () => {},
    onPageChange = () => {},
    ariaLabelBuilder = () => {},
  } = props;

  useEffect(() => {
    function updateDimensions() {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 700) setPageDisplayed(1);
        if (window.innerWidth > 700) setPageDisplayed(3);
      }
    }

    updateDimensions();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateDimensions);
    }
  });

  return (
    <Styles.PaginationWrapper>
      <ReactPaginate
        containerClassName="pagination"
        pageClassName="page"
        breakLinkClassName="break"
        activeClassName="active"
        previousLabel={
          <svg viewBox="0 0 32 32">
            <path d="M24.956 14.574h-14.894l6.507-6.507c0.241-0.243 0.39-0.577 0.39-0.947s-0.149-0.704-0.39-0.947l0 0c-0.24-0.241-0.573-0.39-0.94-0.39s-0.699 0.149-0.94 0.39l-8.787 8.787c-0.241 0.24-0.39 0.573-0.39 0.94s0.149 0.699 0.39 0.94l8.787 8.787c0.242 0.247 0.578 0.4 0.95 0.4 0.734 0 1.329-0.595 1.329-1.329 0-0.372-0.153-0.709-0.4-0.95l-0-0-6.507-6.507h14.894c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333v0z" />
          </svg>
        }
        nextLabel={
          <svg viewBox="0 0 32 32">
            <path d="M7.044 17.425h14.893l-6.507 6.507c-0.241 0.243-0.39 0.577-0.39 0.947s0.149 0.704 0.39 0.947l-0-0c0.241 0.242 0.574 0.392 0.942 0.392s0.701-0.15 0.942-0.392l8.783-8.783c0.241-0.24 0.39-0.573 0.39-0.94s-0.149-0.699-0.39-0.94l-8.783-8.787c-0.239-0.234-0.567-0.379-0.929-0.379-0.734 0-1.329 0.595-1.329 1.329 0 0.362 0.145 0.69 0.379 0.929l-0-0 6.507 6.507h-14.897c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333v0z" />
          </svg>
        }
        pageRangeDisplayed={pageDisplayed}
        marginPagesDisplayed={1}
        forcePage={page}
        pageCount={pageCount}
        hrefBuilder={hrefBuilder}
        onPageChange={(pageObj: any) => {
          onPageChange(pageObj.selected);
        }}
        ariaLabelBuilder={ariaLabelBuilder}
      />
    </Styles.PaginationWrapper>
  );
};

export default PaginationControl;
