import styled from 'styled-components';
import { c } from '../common/styledVariables';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BiChevronLeft as LeftIco, BiChevronRight as RightIco } from 'react-icons/bi'
import { setCurrentPage } from '../../store/countriesSlice';


const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  
  ul {
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;

    li {
      width: 30px;
      height: 30px;
      font-size: 14px;
      font-weight: 500;
      list-style: none;
      border: 1px solid ${c.clr_additional};
      border-radius: 3px;
      cursor: pointer;
      transition: 0.2s;

      @media ${c.media_tablet} {
        width: 34px;
        height: 34px;
      }

      &:hover {
        color: ${c['dark'].clr_text};
        border: 1px solid ${c.clr_accent};
        background-color: ${c.clr_accent};
      }

      &.activeList {
        color: ${c['dark'].clr_text};
        border: 1px solid ${c.clr_accent_hover};
        background-color: ${c.clr_accent_hover};
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media ${c.media_tablet} {
    justify-content: flex-start;
  }
`

export const Pagination = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector(state => state.countries.countriesList);
  const perPage = useSelector(state => state.countries.perPage);
  const currentPage = useSelector(state => state.countries.currentPage);


  const pageCount = useMemo(() => {
    const paginationArr = [];
    const allPages = Math.ceil(countriesList.length / perPage);
    for (let i = 1; i <= allPages; i++) paginationArr.push(i);
    return paginationArr.length;
  }, [countriesList, perPage])

  return (
    <StyledPagination>
      <ReactPaginate
        onPageChange={(e) => {dispatch(setCurrentPage(e.selected + 1))}}
        forcePage={currentPage-1}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        breakLabel="..."
        nextLabel={<RightIco/>}
        previousLabel={<LeftIco/>}
        disabledClassName="disabledArrow"
        activeClassName="activeList"
      />
    </StyledPagination>
  )
}
 
export default Pagination;