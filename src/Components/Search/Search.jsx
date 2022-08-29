import React from 'react'
import { FcSearch } from 'react-icons/fc'
import './search.css';

export const Search = () => {
  return (
    <div>
        <div class="alert alert-dismissible alert-primary">
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert"></button> */}
  <h4 class="alert-heading search-head">Background PNG!</h4>
  <p> <div class="input-group mb-3">
      <span class="input-group-text"><FcSearch/></span>
      <input type="text" class="form-control "/>
      {/* <span class="input-group-text">.00</span> */}
    </div></p>
    <div className="trending">
         Most Search :
    <span class="badge  bg-secondary span-1">Virat Kohli</span>
    <span class="badge bg-secondary">Sonu Sood</span>
    <span class="badge bg-secondary">Ak the beauty</span>
    <span class="badge bg-secondary">Ak the editor</span>
    <span class="badge bg-secondary">AK the chapri</span>
    </div>

</div>

    </div>

    
  )
}
