import React from 'react'

const UseEffectPagiation = ({pagination, onPageChange}) => {

  const  {_page, _limit, _totalRows} = pagination;

  const totalPages =  Math.ceil(_totalRows /  _limit );

  const onHandlePageChage  = (newpage) => {
    if(onPageChange) {
      onPageChange(newpage);
    }
  };

  return (
    <div>
      <button
        disabled={_page <= 1}
        onClick={() => onHandlePageChage(_page - 1)}
      >
        Prev
      </button>

      <button
        disabled={_page >= totalPages}
        onClick={() => onHandlePageChage(_page - 1)}
      >
        Next
      </button>

    </div>
  )
}

export {UseEffectPagiation};
