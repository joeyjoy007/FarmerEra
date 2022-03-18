import React, { useEffect, useState } from 'react';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';


const Paginationn = () => {

    const [pageNumber,setPageNumber] = useState(0)
    const [totalPages, setTotalPages] = useState(0);
    const [posts, setPosts] = useState("");

    const pages = new Array(totalPages).fill(null).map((v,i)=>i)

    useEffect(() => {
        fetch(`http://localhost:8000/page?page=${pageNumber}`)
        .then((response)=>response.json())
        .then(({totalPages,product})=>{
            console.log(totalPages,product);
            setPosts(product)
            setTotalPages(totalPages)
        })
    }, [pageNumber]);
    
    console.log(pages);

    const goToPrevious = (e)=>{
        e.preventDefault()
        setPageNumber(Math.max(0,pageNumber-1))
    }


    const goToNext = (e)=>{
        e.preventDefault()
        setPageNumber(Math.min(totalPages - 1,pageNumber+1))
    }

    const handleChange = (e,v)=>{
        e.preventDefault()
        setPageNumber(v-1)

    }

  return <div>
        <h3>Page {pageNumber+1}</h3>
        {posts?posts.map((post)=>(
            <div className=''>
            <h4>{post.productName}</h4>
            <p>{post.productPrice}</p>
            </div>
        )):"Loading..."}
        <button onClick={goToPrevious}>Previous</button>

{
    pages.map((pageIndex)=>{
       return(
            <button onClick={()=>setPageNumber(pageIndex)} >{pageIndex + 1}</button>
       )
        })
}

<button onClick={goToNext}>Next</button>
{/*<Stack spacing={2}>
    
      <Pagination count={totalPages} boundaryCount={2}  onChange={handleChange} color="primary" />
      
</Stack>*/}
  </div>;
  
};

export default Paginationn;
