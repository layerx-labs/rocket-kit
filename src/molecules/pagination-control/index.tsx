import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import * as Styles from './styles';

export interface PageControlProps {
  dark?: boolean;
  page: number;
  pageCount: number;
  hrefBuilder?: any;
  onPageChange?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  ariaLabelBuilder?: any;
  dataTestId?: string;
}

const PaginationControl = (props: PageControlProps) => {
  const [pageDisplayed, setPageDisplayed] = useState(3);

  const {
    dark = false,
    page = 0,
    pageCount,
    hrefBuilder = () => {},
    onPageChange = () => {},
    ariaLabelBuilder = () => {},
    dataTestId,
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
    <Styles.PaginationWrapper data-testid={dataTestId}>
      {/* @ts-ignore */}
      <ReactPaginate
        containerClassName={dark ? 'dark pagination' : 'pagination'}
        pageClassName="page"
        breakLinkClassName="break"
        activeClassName="active"
        previousLabel={
          <svg viewBox="0 0 32 32">
            <path d="M22.6986 26.027C22.0701 26.7812 20.9491 26.8832 20.1948 26.2546L9.52814 17.3657C9.12282 17.0279 8.88847 16.5276 8.88847 16C8.88847 15.4724 9.12282 14.972 9.52814 14.6342L20.1948 5.74536C20.9491 5.1168 22.0701 5.21871 22.6986 5.97298C23.3272 6.72725 23.2253 7.84826 22.471 8.47682L13.4432 16L22.471 23.5231C23.2253 24.1517 23.3272 25.2727 22.6986 26.027Z" />
          </svg>
        }
        nextLabel={
          <svg viewBox="0 0 32 32">
            <path d="M9.30048 5.97303C9.92904 5.21876 11.05 5.11685 11.8043 5.74541L22.471 14.6343C22.8763 14.9721 23.1106 15.4724 23.1106 16C23.1106 16.5276 22.8763 17.028 22.471 17.3658L11.8043 26.2546C11.05 26.8832 9.92904 26.7813 9.30048 26.027C8.67192 25.2727 8.77383 24.1517 9.5281 23.5232L18.5559 16L9.5281 8.47686C8.77383 7.8483 8.67192 6.7273 9.30048 5.97303Z" />
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
