var b=document.getElementById("navbar");

b.innerHTML=`
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <form class="d-flex">
        <input class="form-control " type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light ms-3" type="submit">Search</button>
      </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link text-light" href="About.html">About</a>
        </li>
        <li class="nav-item">
               <a class="nav-link active text-light" aria-current="page" href="Stories.html">Stories</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Nobel Prizes& Laureates 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">All Nobel Prizes</a></li>
             <li><a class="dropdown-item" href="#">Noble Prizes 2025</a></li>
             <li><a class="dropdown-item" href="#"></a></li> <li><a class="dropdown-item" href="#"> Physics Noble Prizes 2025</a></li> <li><a class="dropdown-item" href="#"> Chemistry Noble Prizes 2025</a></li> <li><a class="dropdown-item" href="#">Biology Noble Prizes 2025</a></li> <li><a class="dropdown-item" href="#"> Medicine Noble Prizes 2025</a></li><li><a class="dropdown-item" href="#">Literature Noble Prizes 2025</a></li>
            <li><a class="dropdown-item" href="#">Peace Noble Prizes 2025</a></li>
            <li><a class="dropdown-item" href="#">Economic Noble Prizes 2025</a></li>
      
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="Educational.html">Educational</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
<hr>
`;